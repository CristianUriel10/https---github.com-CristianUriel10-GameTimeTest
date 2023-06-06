// Libraries
import styled from "styled-components";

export const ContainerInput = styled.div`
  border: solid 1px black;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  width: 600px;
  border-radius: 40px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border-style: none;
  width: 100%;
  margin: 0 10px;
  font-size: 20px;
  &:focus-visible {
    outline: none;
  }
`;
