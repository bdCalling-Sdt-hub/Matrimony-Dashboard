
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const style = {
    top: 20,
    left: 150,
    lineHeight: "50px"
};

export default function FreeMembersChart({data}) {
    const countData = [
        {
            name: "Male Members " +data?.male,
            uv: data?.male,
            fill: "#2BA24C"
        },
        {
            name: "Woman Members "+data?.female,
            uv: data?.female,
            fill: "#E91E63"
        },
    
    ];
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
                data={countData}
            >
                <RadialBar
                    minAngle={15}
                    // label={{ position: "insideStart", fill: "#000" }}
                    background
                    clockWise
                    dataKey="income"
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
