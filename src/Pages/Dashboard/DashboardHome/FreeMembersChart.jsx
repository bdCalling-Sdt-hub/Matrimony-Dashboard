
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
    {
        name: 'Male Members\n10k',
        uv: 31.47,
        pv: 2400,
        fill: "#2BA24C"
    },
    {
        name: "Woman Members",
        uv: 26.69,
        pv: 4567,
        fill: "#E91E63"
    },

];

const style = {
    top: 20,
    left: 150,
    lineHeight: "50px"
};

export default function FreeMembersChart() {
    return (
        <div>
            <RadialBarChart
                width={400}
                height={150}
                cx={80}
                cy={70}
                innerRadius={20}
                outerRadius={60}
                barSize={10}
                data={data}
            >
                <RadialBar
                    minAngle={15}
                    // label={{ position: "insideStart", fill: "#000" }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />
            </RadialBarChart>
        </div>
    );
}
