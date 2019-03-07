import React, { Component } from "react";
import { LoginBox } from "../slyled";
import { Background, FormStyled, ButtonStyled } from "../assets/styles/common";
import Logo from "../components/Common/Logo";
import Input from "../components/Common/Input";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@Messenger:username", username);

    this.props.history.push("/chat");
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Background>
        <LoginBox>
          <div>
            <div>
              <Logo />
            </div>
          </div>
          <div>
            <FormStyled onSubmit={this.handleSubmit}>
              <h3>Login to your account</h3>
              <Input type='text' name='username' placeholder='E-mail' value={this.state.username} handleInputChange={this.handleInputChange}/>
              <Input type='password' name='password' placeholder='Password' value={this.state.password} handleInputChange={this.handleInputChange} />
              <ButtonStyled>Login</ButtonStyled>
            </FormStyled>
          </div>
        </LoginBox>
      </Background>
    );
  }
}

export default Login;
