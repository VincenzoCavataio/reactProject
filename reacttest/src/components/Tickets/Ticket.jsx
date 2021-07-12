import React from "react";
import TicketS from "./TicketS";

const Ticket = ({ Ticket }) => {
  return (
    <TicketS>
      <div className="info_flight p2030">
        <div className="partenza">
          <p>{Ticket.date}</p>
          <span>
            <small>da</small>
          </span>
          <h3>{Ticket.from}</h3>
        </div>
        <div className="arrivo">
          <span>
            <small>a</small>
          </span>
          <h3>{Ticket.to}</h3>
        </div>
      </div>
      <div className='cross_line'>

      </div>
      <div className="info_buy p2030">
        <p>id: {Ticket.id}</p>
        <p className='price'>{Ticket.price} €</p>
        <button>Acquista</button>
      </div>
    </TicketS>
  );
};

export default Ticket;
