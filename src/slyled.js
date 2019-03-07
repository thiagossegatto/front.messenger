import styled from 'styled-components';

export const LoginBox = styled.div`

  width: 900px;
  height: 400px;
  display: grid;
  background: #FFF;
  box-shadow: 0 0 25px #333;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  border-radius: 5px;
  grid-template-areas: 
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c"
      "m m m m m c c c c c c c";

  > div{
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    width: 100%;
  }

  > div:nth-child(1) {
    border-radius: 5px 0 0 5px;
    background: #2d324e;
    grid-area: m;
  }

  > div:nth-child(2) {
    border-radius: 0px 5px 5px 0px;
    background: #FFF;
    grid-area: c;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    grid-template-areas: 
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c";
  }
  @media (max-width: 450px) {
    grid-template-areas: 
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c"
      "c c c c c c c c c c c c";
  }

`;

export const ContextBox = styled(LoginBox)`
  width: 100%;
  height: 100vh;
  flex: 1;
  grid-template-areas: 
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c"
      "m m c c c c c c c c c c";
  
  @media (max-width: 1500px) {
    grid-template-areas: 
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c"
      "m m m c c c c c c c c c";
  }
  @media (max-width: 960px) {
    grid-template-areas: 
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c"
      "m m m m c c c c c c c c";
  }
  @media (max-width: 420px) {
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: 100% repeat(12, 2fr);
    grid-template-areas:  
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c"
      "m m m m m m c c c c c c";
      > div {
        position: absolute;
        height: 100%;
      }
      > div:nth-child(2) {
        left: 100%;
        transition: left 1s;
      }
  }
  > div:nth-child(1) {
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: 
      "l l l l l l l l l l l l"
      "l l l l l l l l l l l l"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m"
      "m m m m m m m m m m m m";

      > div:nth-child(1) {
        grid-area: l;
        height: 100%;
        width: 100%;
      }
      > div:nth-child(2) {
        grid-area: m;
        height: 100%;
        width: 100%;
      }
  }
`;