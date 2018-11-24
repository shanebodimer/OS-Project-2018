import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Tabs from "@atlaskit/tabs";

import SingleForm from "./SingleForm.jsx";
import BatchForm from "./BatchForm.jsx";

// Styles
import "./lhs.css";

export default class LHS extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      size: 100,
      iterations: 10,
      nodes: 1,
      threads: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitTest = this.submitTest.bind(this);
    this.updateTestType = this.updateTestType.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitTest(params) {
    console.log(params);
    // this.props.runTest(params);
  }

  updateTestType(type) {
    console.log("yo", type);
    this.props.testType(type);
  }

  render() {
    return (
      <div className="col-md-4 lhs">
        <Tabs
          tabs={[
            {
              type: "single",
              label: (
                <small>
                  <i className="far fa-image mr-1" />
                  Single test
                </small>
              ),
              content: <SingleForm submitTest={this.submitTest} />
            },
            {
              type: "batch",
              label: (
                <small>
                  <i className="far fa-images mr-1" />
                  Batch test
                </small>
              ),
              content: <BatchForm submitTest={this.submitTest} />
            }
          ]}
          onSelect={tab => this.updateTestType(tab.type)}
          selected={this.props.type === "single" ? 0 : 1}
        />
      </div>
    );
  }
}
