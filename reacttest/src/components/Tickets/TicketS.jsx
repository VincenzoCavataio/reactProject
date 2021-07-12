import styled from "styled-components";

const TicketS = styled.div`
padding: 20px 60px;
margin: 20px auto;
box-shadow: 10px 8px 6px 1px rgba(0,0,0,0.26);
background-color: white;
  width: 50%;
  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }

  button {
    margin-top: 11px;
    padding: 8px 20px;
    color: #1C7EE4;
    background-color: transparent;
    border: 2px solid #1C7EE4;
    font-size: 18px;
    box-shadow: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  button:hover {
    color: white;
    background-color: #1C7EE4;
    transition: all 0.2s ease-out;

  }
`;

export default TicketS
