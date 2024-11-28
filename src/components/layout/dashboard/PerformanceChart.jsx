import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ScheduleBoard = () => {
  const data = [
    { name: "Nov 19", value: 7.05 },
    { name: "Nov 20", value: 3.11 },
    { name: "Nov 21", value: 2.15 },
    { name: "Nov 22", value: 1.81 },
    { name: "Nov 23", value: 1.77 },
    { name: "Nov 24", value: 3.15 },
    { name: "Nov 25", value: 1.93 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-center text-blue-700">
        Performance
      </h3>
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ScheduleBoard;
