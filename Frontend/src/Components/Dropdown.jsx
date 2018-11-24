import React from "react";
import { FormGroup, Input } from "reactstrap";

export default class SingleForm extends React.Component {
  render() {
    return (
      <FormGroup>
        <small>{this.props.title}</small>
        <Input
          type="select"
          name={this.props.name}
          className="at-select"
          value={this.props.value}
          onChange={this.props.handleChange}
        >
          {this.props.options.map(function(option, i) {
            return <option key={i}>{option}</option>;
          })}
        </Input>
      </FormGroup>
    );
  }
}
