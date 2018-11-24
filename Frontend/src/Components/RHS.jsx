import React from "react";
import { Link } from "react-router-dom";

import { ProgressTracker } from "@atlaskit/progress-tracker";

import { run } from "../Utilities/api.jsx";

import "./rhs.css";

export default class RHS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };

    // Demo progress
    setInterval(
      () =>
        this.setState({
          progress: this.state.progress < 100 ? this.state.progress + 10 : 0
        }),
      500
    );

    this.runTest = this.runTest.bind(this);
  }

  runTest() {
    // Search
    run("params").then(res => {});
  }

  render() {
    return (
      <div className="col-md-8 rhs">
        <div className="title">
          <small>
            {this.props.testType === "single" ? (
              <span>
                <i className="far fa-image fa-fw mr-1 text-primary" />
                Single test
              </span>
            ) : (
              <span>
                <i className="far fa-images fa-fw mr-1 text-primary" />
                Batch test
              </span>
            )}
          </small>
        </div>

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
