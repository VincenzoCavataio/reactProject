import styled from "styled-components";

const TicketS = styled.div`
  /* padding: 20px 30px; */
  margin: 20px auto;
  background-color: white;
  box-shadow: 10px 8px 6px 1px rgba(0, 0, 0, 0.26);
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .info_flight {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 60%;
  }

  .partenza,
  .arrivo {
    text-align: center;
  }
  .p2030 {
    padding: 20px 30px;
  }

  .info_buy {
    text-align: center;
    /* border-left: .125rem dashed #A7CEF5 */
  }

  .cross_line {
    border-left: 0.125rem dashed #a7cef5;
    align-self: stretch;
    position: relative;
  }

  .cross_line::before {
    background: #a7cef5;
    content: "";
    display: inline-block;
    height: 0.63rem;
    left: -0.5rem;
    position: absolute;
    width: 0.875rem;
    z-index: 1;
    border-radius: 0.875rem 0.875rem 0 0;
    top: -1px;
    transform: rotate(180deg);
  }

  /* .cross_line::after {
    background: #a7cef5;
    content: "";
    display: inline-block;
    height: 0.4375rem;
    left: -0.5rem;
    position: absolute;
    width: 0.875rem;
    z-index: 1;
    border-radius: 0.875rem 0.875rem 0 0;
    bottom: 0;
    box-shadow: 0 13px 3px -10px rgba(0, 0, 0, 0.26) inset, 0 3px 0 #a7cef5;
  } */

  h3 {
    font-size: 24px;
    margin: 0;
  }

  p {
    font-size: 16px;
  }

  button {
    margin-top: 11px;
    padding: 8px 20px;
    color: #1c7ee4;
    background-color: transparent;
    border: 2px solid #1c7ee4;
    font-size: 18px;
    box-shadow: none;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  button:hover {
    color: white;
    background-color: #1c7ee4;
    transition: all 0.2s ease-out;
  }

  .price {
    font-size: 24px;
    color: #1c7ee4;
    font-weight: bold;
  }

  .maxH {
    max-height: 30px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default TicketS;
