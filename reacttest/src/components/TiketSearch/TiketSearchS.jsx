import styled from "styled-components";

const TiketSearchS = styled.div`
  display: flex;
  flex-wrap: wrap;

  .ml15 {
    margin-left: 15px;
  }

  input {
    padding: 7px 10px;
    border: 1px solid black;
    box-shadow: none;
    /* margin-left: 15px; */
    cursor: pointer;
  }

  select {
    /* margin-left: 15px; */
    cursor: pointer;
    width: 200px;
    height: 50px;
    padding: 7px;
  }

  .leave {
      padding: 0 20px;
      border: 2px solid white;
      display: flex;
      align-items: center;
  }

  button {
      padding: 7px 25px;
      background-color: transparent;
      font-size: 20px;
      color: white;
      border:  2px solid white;
      cursor: pointer;
  }

  @media screen and (max-width: 1337px) {
    .mbMedia {
      margin-bottom: 20px;
    }
  }
`;
export default TiketSearchS;
