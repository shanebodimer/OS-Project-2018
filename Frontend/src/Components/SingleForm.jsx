import React from "react";
import { FormGroup, Input } from "reactstrap";

import Dropdown from "./Dropdown.jsx";

export default class SingleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "100x100",
      iterations: 10,
      nodes: 1,
      threads: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitSingleTest = this.submitSingleTest.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitSingleTest() {
    let params = {
      type: "single",
      size: this.state.size,
      iterations: this.state.iterations,
      nodes: this.state.nodes,
      threads: this.state.threads
    };

    this.props.submitTest(params);
  }

  render() {
    return (
      <div className="w-100 body">
        <h3>
          <i className="far fa-image" /> Configure single test
        </h3>

        <Dropdown
          name="size"
          title={"Image size"}
          handleChange={this.handleChange}
          value={this.state.size}
          options={["100x100", "200x200", "300x300", "400x400"]}
        />

        <Dropdown
          name="iterations"
          title={"Max iterations"}
          handleChange={this.handleChange}
          value={this.state.iterations}
          options={[10, 20, 50, 75, 100]}
        />

        <Dropdown
          name="nodes"
          title={"Number of nodes"}
          handleChange={this.handleChange}
          value={this.state.nodes}
          options={[1, 2, 3, 4]}
        />

        <Dropdown
          name="threads"
          title={"Threads per node"}
          handleChange={this.handleChange}
          value={this.state.threads}
          options={[1, 2, 3, 4]}
        />

        <br />
        <div
          className="btn btn-lg btn-primary w-100 text-left"
          onClick={this.submitSingleTest}
        >
          Generate fractal
          <i className="fas fa-arrow-right fa-sm ml-2" />
        </div>
      </div>
    );
  }
}
