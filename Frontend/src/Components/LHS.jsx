import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import Select from "@atlaskit/select";
// import Button from "@atlaskit/button";

// import Form, {
//   Field,
//   FieldGroup,
//   FormHeader,
//   FormSection,
//   FormFooter
// } from "@atlaskit/form";

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
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitTest() {
    let params = {
      size: this.state.size,
      iterations: this.state.iterations,
      nodes: this.state.nodes,
      threads: this.state.threads
    };

    this.props.runTest(params);
  }

  render() {
    return (
      <div className="col-md-4 lhs">
        {/* <div className="title">
          <h5>Configure test case</h5> 
          Configure test case
        </div> */}

        <div className="body">
          <h3>
            <i className="fas fa-cogs" /> Configure fractal generation
          </h3>

          <FormGroup>
            <small>Image size</small>
            <Input
              type="select"
              name="size"
              className="at-select"
              value={this.state.size}
              onChange={this.handleChange}
            >
              <option value={100}>100x100</option>
              <option value={200}>200x200</option>
              <option value={300}>300x300</option>
              <option value={400}>400x400</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <small>Max iterations</small>
            <Input
              type="select"
              name="iterations"
              className="at-select"
              value={this.state.iterations}
              onChange={this.handleChange}
            >
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </Input>
          </FormGroup>

          <div className="row options">
            <div className="col-md">
              <FormGroup>
                <small>Number of nodes</small>
                <Input
                  type="select"
                  name="nodes"
                  className="at-select"
                  value={this.state.nodes}
                  onChange={this.handleChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Input>
              </FormGroup>
            </div>
            <div className="col-md">
              <FormGroup>
                <small>Threads per node</small>
                <Input
                  type="select"
                  name="threads"
                  className="at-select"
                  value={this.state.threads}
                  onChange={this.handleChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Input>
              </FormGroup>
            </div>
          </div>

          <br />
          <div
            className="btn btn-lg btn-primary w-100 text-left"
            onClick={this.submitTest}
          >
            Generate fractal <i className="fas fa-arrow-right fa-sm ml-2" />
          </div>
        </div>

        {/* <div>pis, threads, iterations, threashold</div> */}

        {/* <Field label="Field 1"> */}

        {/* </Field> */}
      </div>
    );
  }
}
