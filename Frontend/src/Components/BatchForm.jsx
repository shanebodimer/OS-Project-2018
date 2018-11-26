import React from "react";
import { FormGroup, Input } from "reactstrap";

import Dropdown from "./Dropdown.jsx";

export default class ManyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "100x100",
      iterations: 10,
      nodes: 1,
      threads: 1,
      modifier: "Max iterations",
      from: 10,
      to: 20
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitBatchTest = this.submitBatchTest.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

    // Update default values
    switch (event.target.value) {
      case "Max iterations":
        this.setState({ from: 10, to: 20 });
        break;
      case "Number of worker nodes":
        this.setState({ from: 1, to: 2 });
        break;
      case "Threads per node":
        this.setState({ from: 1, to: 2 });
        break;
      default:
        break;
    }
  }

  submitBatchTest() {
    console.log(this.state.to, this.state.from);
    let params = {
      type: "batch",
      modifier: this.state.modifier,
      from: this.state.from,
      to: this.state.to,
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
          <i className="far fa-images" /> Configure batch test
        </h3>

        <FormGroup>
          <small className="modifier">Modifier</small>
          <Input
            type="select"
            name="modifier"
            className="at-select"
            value={this.state.modifier}
            onChange={this.handleChange}
          >
            <option>Max iterations</option>
            <option>Number of worker nodes</option>
            <option>Threads per node</option>
          </Input>
        </FormGroup>

        <Dropdown
          name="size"
          title={"Image size"}
          handleChange={this.handleChange}
          value={this.state.size}
          options={[
            "100x100",
            "250x250",
            "500x500",
            "750x750",
            "1000x1000",
            "5000x5000",
            "10000x10000"
          ]}
        />

        {this.state.modifier !== "Max iterations" && (
          <FormGroup>
            <small>Max iterations</small>
            <Input
              type="number"
              min={0}
              name="iterations"
              className="at-select number"
              value={this.state.iterations}
              onChange={this.handleChange}
            />
          </FormGroup>
        )}
        {this.state.modifier === "Max iterations" && (
          <div className="row options">
            <div className="col-md">
              <Dropdown
                name="from"
                title={"From max iterations"}
                handleChange={this.handleChange}
                value={this.state.from}
                options={[10, 20, 50, 75, 100]}
              />
            </div>
            <div className="col-md">
              <Dropdown
                name="to"
                title={"To max iterations"}
                handleChange={this.handleChange}
                value={this.state.to}
                options={[10, 20, 50, 75, 100]}
              />
            </div>
          </div>
        )}

        {this.state.modifier !== "Number of worker nodes" && (
          <Dropdown
            name="nodes"
            title={"Number of worker nodes"}
            handleChange={this.handleChange}
            value={this.state.nodes}
            options={[1, 2, 3]}
          />
        )}
        {this.state.modifier === "Number of worker nodes" && (
          <div className="row options">
            <div className="col-md">
              <Dropdown
                name="from"
                title={"From # of worker nodes"}
                handleChange={this.handleChange}
                value={this.state.from}
                options={[1, 2, 3]}
              />
            </div>
            <div className="col-md">
              <Dropdown
                name="to"
                title={"To # of worker nodes"}
                handleChange={this.handleChange}
                value={this.state.to}
                options={[1, 2, 3]}
              />
            </div>
          </div>
        )}

        {this.state.modifier !== "Threads per node" && (
          <Dropdown
            name="threads"
            title={"Threads per node"}
            handleChange={this.handleChange}
            value={this.state.threads}
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          />
        )}
        {this.state.modifier === "Threads per node" && (
          <div className="row options">
            <div className="col-md">
              <Dropdown
                name="from"
                title={"From threads per node"}
                handleChange={this.handleChange}
                value={this.state.from}
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              />
            </div>
            <div className="col-md">
              <Dropdown
                name="to"
                title={"To threads per node"}
                handleChange={this.handleChange}
                value={this.state.to}
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              />
            </div>
          </div>
        )}

        <br />
        <div
          className="btn btn-lg btn-primary w-100 text-left"
          onClick={this.submitBatchTest}
        >
          Generate fractals
          <i className="fas fa-arrow-right fa-sm ml-2" />
        </div>
      </div>
    );
  }
}
