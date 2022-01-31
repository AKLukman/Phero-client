import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import useAuth from "../../../../hooks/useAuth";
import CustomTooltip from "../Chart/CustomTooltip";
// import "./Chart.css";

const Chart = (props) => {
  const COLORS = ["green", "red"];
  const [scores, setScores] = useState([]);
  const [scoresO, setScoresO] = useState(0);
  const { user } = useAuth();

  // const { score } = props;
  // const rightScore = score * 20;

  // Score

  useEffect(() => {
    fetch(`http://localhost:5000/scores`)
      .then((res) => res.json())
      .then((data) => {
        setScores(data);
        // setLoading(false);
      });
  }, []);

  //   const score = scores
  //     .filter((score) => score.email === user.email)
  //     .map((sll) => sll.score);
  //   console.log(score);

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
      <div
        id="chart-container"
        style={{ textAlign: "center", color: "blue", marginTop: "20px" }}
      >
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
