import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  loginActivity: [],
  pagination: {},
};

const token = localStorage.getItem("token");

export const LoginActivitys = createAsyncThunk(
  "LoginActivitys",
  async (value, thunkAPI) => {
    try {
      const response = await axios.get("/activity", {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("yourInfo");
      }
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginActivitySlice = createSlice({
  name: "loginActivity",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.loginActivity = [];
      state.pagination = {};
    },
  },
  extraReducers: {
    [LoginActivitys.pending]: (state, action) => {
      state.isLoading = true;
    },
    [LoginActivitys.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.data?.attributes;
      state.loginActivity = action.payload;
    },
    [LoginActivitys.rejected]: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
});

export const {} = loginActivitySlice.actions;
export default loginActivitySlice.reducer;
