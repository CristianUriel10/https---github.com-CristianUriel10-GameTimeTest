// Libraries
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .input-container {
    width: 600px;
    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  }
  .img-logo {
    display: block;
    margin: auto;
  }
`;
