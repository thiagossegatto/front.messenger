import React, { Component } from "react";

import { LogoStyled } from "../../assets/styles/common";
import LogoImg from "../../assets/imgs/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <LogoStyled>
          <img src={LogoImg} alt='Logo' width='160' />
      </LogoStyled>
    );
  }
}
