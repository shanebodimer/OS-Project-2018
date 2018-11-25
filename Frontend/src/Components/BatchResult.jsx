import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "Page A", modifier: 4000 },
  { name: "Page B", modifier: 3000 },
  { name: "Page C", modifier: 2000 },
  { name: "Page D", modifier: 2780 },
  { name: "Page E", modifier: 1890 },
  { name: "Page F", modifier: 2390 },
  { name: "Page G", modifier: 3490 }
];

export default class BatchResult extends React.Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br />
          <LineChart
            width={730}
            height={500}
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="modifier" stroke="#8884d8" />
          </LineChart>
        </center>
      </div>
    );
  }
}
