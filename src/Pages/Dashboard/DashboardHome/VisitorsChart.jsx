import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default function VisitorsChart(props) {
    return (
        <BarChart
            width={props.width}
            height={props.height}
            data={props?.data}
            margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" interval={0} angle={-45} textAnchor="end" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="visitors" fill="#E91E63" barSize={6} />
        </BarChart>
    );
}
