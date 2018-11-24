import React from "react";
import { Link } from "react-router-dom";

// Components
import LHS from "../Components/LHS.jsx";
import RHS from "../Components/RHS.jsx";

// Utilities
import { run } from "../Utilities/api.jsx";

export default class Single extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      testType: "single"
    };

    // Bind state operators
    this.runTest = this.runTest.bind(this);
    this.testType = this.testType.bind(this);
  }

  testType(type) {
    this.setState({ testType: type });
  }

  runTest(params) {
    // Search
    console.log(params);
    // run("params").then(res => {});
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
          <RHS testType={this.state.testType} />
        </div>
      </div>
    );
  }
}
