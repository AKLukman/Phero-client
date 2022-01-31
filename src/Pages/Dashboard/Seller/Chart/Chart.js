import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";
import "./Chart.css";

const Chart = (props) => {
  const COLORS = ["green", "red"];
  // const { score } = props;
  // const rightScore = score * 20;

  const pieData = [
    {
      name: "Correct",
      value: 80, //dynamic data
    },
    {
      name: "Wrong",
      value: 20, //dynamic data
    },
  ];

  return (
    <>
      <div id="chart-container" style={{ textAlign: "center", color: "blue" }}>
        <h6>Skill Test Result</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PieChart width={730} height={300}>
            <Pie
              data={pieData}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default Chart;
