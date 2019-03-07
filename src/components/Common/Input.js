import React, { Component } from "react";

import { InputStyled, Label } from "../../assets/styles/common";

export default class Input extends Component {
  render() {
    return (
      <div>
        {this.props.label !== null && <Label>{this.props.label}</Label>}
        <InputStyled
          style={{color: this.props.color}}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          onKeyDown={this.props.handleSubmit}
          onChange={this.props.handleInputChange}
        />
      </div>
    );
  }
}
