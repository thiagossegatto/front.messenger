import React, { Component } from "react";

import logo from "../twitter.svg";
import "./Login.css";

export default class pages extends Component {
  state = {
    username: ""
  };
  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@Messenger:username", username);

    this.props.history.push('/messenger');

  };
  handleInputChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  render() {
    return (
      <div className="login-wrapper">
        <img src={logo} alt="Logo" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
