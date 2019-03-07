import styled from 'styled-components';
import img from '../imgs/background.jpg'

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(rgba(49, 49, 70, 0.45), rgba(49, 49, 70, 0.8)), url(${img});
`;

export const LogoStyled = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content:center;

  svg{
    font-size: 80px;
    position: relative;
    right: 60px;
    top: 7px;
  }

  span{
    font-size: 40px;
    padding: 10px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  width: 100%;
  padding: 35px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3{
    font-size: 24px;
    color: #2d385e;
  }

  > div {
    width: 100%;
    padding: 10px 0;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  display: block;
  border: none;
  border-bottom: 1px solid #CCC !important;
  font-size: 14px;
  background: transparent;
`;

export const ButtonStyled = styled.button`
  width: 100%;
  background: #4f77ff;
  padding: 15px 0;
  border-radius: 3px;
  box-shadow: 0 2px 3px #9c9c9c;
  font-size: 18px;
  color: #FFF;
  margin-top: 20px;
`;

export const Label = styled.label`
  width: 100%;
`;

export const AvatarStyled = styled.span`
  display: flex;
  width: ${props => `${props.widthImg}px`};
  height: ${props => `${props.widthImg}px`};
  max-width: 40px;
  min-width: 30px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #CCC;

  > img {
    width: 100%;
  }
`;