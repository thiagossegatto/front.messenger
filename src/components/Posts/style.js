import styled from "styled-components";

export const PostStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  > div {
    width: 100%;
    height: 100%;
  }

  .lista-chat {
    display: block;
    width: 100%;
    height: 88%;
    overflow: auto
  }
  .lista-chat > div{
    display: flex;
    width: 100%;
    padding: 0 5%;
  }
  .lista-chat > div.own{
    justify-content: flex-end;
  }
  .lista-chat > div.own p{
    background: #04A9F4;
    color: #FFF;
  }
  .lista-chat > div > span {
    display: flex;
    margin: 20px 0;
    flex-direction: row;
    width: 70%;
  }
  .lista-chat > div > span > div {
    display: flex;
    color: #333;
    width: 100%;
    flex-direction: column;
    margin-left: 20px
  }
  .lista-chat > div > span > div > span {
    display: flex;
    color: #333;
    width: 100%;
    flex-direction: row;
    justify-content:space-between;
    font-size: 12px;
  }
  .lista-chat > div > span p {
    display: flex;
    flex: 1;
    padding: 10px 20px;
    background: #F5F5F5;
    border-radius: 10px;
    color: #333;
    width: 100%;
    margin-top: 5px;
  }
  form {
    display: flex;
    width: 100%;
    height: 7%;
  }
  form > textarea {
    width: 100%;
    height: 100%;
    border-top: 2px solid #CCC;
    font-size: 12px;
    color: #333;
    padding: 10px;
    resize: none;
    font-family: Lato;
  }
  header{
    width: 100%;
    background: #2d324e;
    color: #FFF;
    font-size: 14px;
    height: 5%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-left: 10px; 
  }
  header > button {
    height: 100%;
    padding: 0 15px;
    display: none;
  }
  @media (max-width: 420px) {
    header > button {
      display: block;
    }
  }
`;