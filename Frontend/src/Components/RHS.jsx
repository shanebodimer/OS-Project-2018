import React from "react";
import { Link } from "react-router-dom";

import { ProgressTracker } from "@atlaskit/progress-tracker";

import { run } from "../Utilities/api.jsx";

import "./rhs.css";

const items = [
  {
    id: "disabled-1",
    label: "Disabled Step",
    percentageComplete: 100,
    status: "disabled",
    href: "#"
  },
  {
    id: "visited-1",
    label: "Visited Step",
    percentageComplete: 100,
    status: "visited",
    href: "#"
  },
  {
    id: "current-1",
    label: "Current Step",
    percentageComplete: 0,
    status: "current",
    href: "#"
  },
  {
    id: "unvisited-1",
    label: "Unvisited Step 1",
    percentageComplete: 0,
    status: "unvisited",
    href: "#"
  },
  {
    id: "unvisited-2",
    label: "Unvisited Step 2",
    percentageComplete: 0,
    status: "unvisited",
    href: "#"
  },
  {
    id: "unvisited-3",
    label: "Unvisited Step 3",
    percentageComplete: 0,
    status: "unvisited",
    href: "#"
  }
];

export default class RHS extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      progress: 50
    };

    // Demo progress
    // setInterval(
    //   () =>
    //     this.setState({
    //       progress: this.state.progress < 100 ? this.state.progress + 10 : 0
    //     }),
    //   500
    // );

    // Bind state operators
    this.runTest = this.runTest.bind(this);
  }

  runTest() {
    // Search
    run("params").then(res => {});
  }

  render() {
    return (
      <div className="col-md-8 rhs">
        <div className="inside">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: this.state.progress + "%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
