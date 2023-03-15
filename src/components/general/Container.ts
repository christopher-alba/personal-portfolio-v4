import styled from "styled-components";

export const Container = styled("div")`
  width: 60%;
  margin: 0 auto;
  position: relative;
  height: 100%;
  @media(max-width: 1600px){
    width: 80%;
  }
  @media(max-width: 600px){
    width:95%;
  }
`;
