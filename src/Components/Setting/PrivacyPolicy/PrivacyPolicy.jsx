import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { Button, Col, Row } from 'antd';
import baseAxios from '../../../../Config';

const PrivacyPolicy = () => {

  const editor = useRef(null)
  const [content, setContent] = useState('');

  const AboutDataSave = () => {
    let token = localStorage.getItem("token");
    console.log("before pass--->",content);
    baseAxios
      .post(
        "/privacy",
        { content: content },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire("Good job!", res.data.message, "success");
      })
      .catch((err) => {
        Swal.fire("Oops!", err.response.data.message, "error");
      });
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    baseAxios
      .get("/privacy", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data.attributes[0].content);
        setContent(res.data.data.attributes[0].content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>

      <Row>
        <Col lg={{ span: 24 }}>

          <JoditEditor
            ref={editor}
            value={content}

            onChange={newContent => { setContent(newContent) }}
          />

          <Button onClick={AboutDataSave} block style={{ marginTop: "30px", backgroundColor: "#E91E63 ", color: "#fff", height: "50px" }}>save</Button>

        </Col>

      </Row>
    </div>
  );
};

export default PrivacyPolicy;
