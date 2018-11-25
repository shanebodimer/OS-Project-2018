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

import { fetch } from "../Utilities/api.jsx";

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
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      data: false
    };

    fetch().then(res => {
      this.setState({
        data: res
      });
    });

    setInterval(
      () =>
        fetch().then(res => {
          this.setState({
            data: res
          });
        }),
      2000
    );

    // Bind state operators
    this.fetchNew = this.fetchNew.bind(this);
  }

  fetchNew() {
    fetch().then(res => {
      this.setState({
        data: res
      });
    });
  }
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <h4>{this.props.mod ? this.props.mod : "Max iterations"} vs. Time</h4>
          in seconds
          <br />
          <br />
          {this.state.data && (
            <LineChart
              width={730}
              height={500}
              data={this.state.data}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <Tooltip />
              <YAxis dataKey="time" />
              <Legend />
              <Line
                type="monotone"
                dataKey="time"
                stroke="#0052cc"
                strokeWidth={4}
              />
            </LineChart>
          )}
        </center>
      </div>
    );
  }
}
