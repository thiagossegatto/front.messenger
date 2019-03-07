import React, { Component } from 'react';

import { AvatarStyled } from "../../assets/styles/common";

export default class Avatar extends Component {
  render() {
    return(
      <AvatarStyled widthImg={this.props.widthImg}>
        <img src={this.props.src} alt='avatar' />
      </AvatarStyled>
    );
  }
}
