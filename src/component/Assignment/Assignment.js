import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Assignment = () => {
    const data = [
      {
        name: "Page A",
        money: 57,
        quiz: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        money: 3000,
        quiz: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        money: 2000,
        quiz: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        money: 2780,
        quiz: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        money: 1890,
        quiz: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        money: 2390,
        quiz: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        money: 3490,
        quiz: 4300,
        amt: 2100,
      },
    ];
    return (
      <div>
        <LineChart width={500} height={400} data={data}>
          <Line
            type="monotone"
            dataKey="money"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
};

export default Assignment;