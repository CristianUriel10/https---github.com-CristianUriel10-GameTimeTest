// Libraries
import styled from "styled-components";

export const MainContainer = styled.div`
  border-right: solid 1px black;
  border-left: solid 1px black;
  border-bottom: solid 1px black;
  margin-left: 20px;
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  p {
    margin: 0px;
  }
  .item {
    display: flex;
    width: 100%;
    height: 50px;
    padding: 10px 20px;
  }
  .box-info {
    padding: 5px 10px;
    width: calc(100% - 110px);
  }
  hr {
    margin: 0px 20px;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
  }
  .subtitle {
    font-size: 12px;
    color: gray;
  }
`;
