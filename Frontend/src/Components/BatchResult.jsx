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
      500
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
          <h4>{this.props.mod ? this.props.mod : "Max iterations"} vs. Time</h4>
          in seconds
          <br />
          {this.state.data && (
            <LineChart
              width={730}
              height={500}
              data={this.state.data}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" strokeWidth={2} />
              <Tooltip />
              <YAxis dataKey="time" strokeWidth={2} domain={["auto", "auto"]} />
              {/* <Legend /> */}
              <Line
                type="monotone"
                dataKey="time"
                stroke="#0052cc"
                strokeWidth={4}
                animationDuration={100}
              />
            </LineChart>
          )}
          <a
            className="btn btn-outline-primary btn-sm"
            href="http://64.251.149.246/api/results.json"
            target="blank"
          >
            View raw data <i className="fas fa-external-link-alt" />
          </a>
        </center>
      </div>
    );
  }
}
