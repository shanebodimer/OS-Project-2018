import React from "react";
import { Link } from "react-router-dom";

// Components
import LHS from "../Components/LHS.jsx";
import RHS from "../Components/RHS.jsx";

// Utilities
import { run } from "../Utilities/api.jsx";
import { throws } from "assert";

export default class Single extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      testType: "single",
      running: false,
      key: false,
      speed: false,
      size: false,
      max: false,
      nodes: false,
      threads: false
    };

    // Bind state operators
    this.runTest = this.runTest.bind(this);
    this.testType = this.testType.bind(this);
  }

  testType(type) {
    this.setState({ testType: type });
  }

  runTest(params) {
    // this.setState({});
    let key = Math.floor(Math.random() * 1000000000).toFixed(0);
    this.setState({ running: true, key: key, speed: false, size: false });
    run(key, params).then(res => {
      this.setState({
        speed: res,
        size: params.size,
        max: params.iterations,
        nodes: params.nodes,
        threads: params.threads
      });
    });
  }

  render() {
    return (
      <div className="single">
        <div className="row">
          <LHS
            testType={this.testType}
            type={this.state.testType}
            runTest={this.runTest}
          />
          <RHS
            key={this.state.key}
            running={this.state.running}
            testType={this.state.testType}
            speed={this.state.speed}
            size={this.state.size}
            max={this.state.max}
            nodes={this.state.nodes}
            threads={this.state.threads}
          />
        </div>
      </div>
    );
  }
}
