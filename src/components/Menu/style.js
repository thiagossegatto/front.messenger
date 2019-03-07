import styled from "styled-components";

export const MenuStyled = styled.div`
  width: 100%;
  
  > form {
    padding: 25px;
  }
  > span {
    color: #fff;
    padding: 0 25px;
  }
  > h3 {
    padding: 0 25px;
    margin: 30px 0 10px 0;
    font-size: 18px;
    color: #fff;
  }
  > ul {
    width: 100%;
    max-height: 420px;
    overflow:auto;
  }
  @media (max-width: 420px) {
    > ul {
      height: 240px;
    }
  }
  > ul > li {
    width: 100%;
  }
  > ul > li > button {
    width: 100%;
    background: #F5F5F5;
    padding: 10px;
    border-bottom: 1px solid #CCC;
    font-size: 16px;
    color: #333;
    display: flex;
    align-items: center;
  }
  > ul > li > button p{
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  > ul > li > button p > span{
    padding: 5px 10px;
    min-height: 20px;
    background: #04A9F4;
    border-radius: 50%;
    color: #FFF;
    animation: fadein 500ms;
    opacity: 0;
    transition: opacity 300ms linear;
    font-size: 0;
  }
  > ul > li > button p > span.active{
    opacity: 1;
    transition: opacity 1000ms linear;
    font-size: 12px;
  }
`;
