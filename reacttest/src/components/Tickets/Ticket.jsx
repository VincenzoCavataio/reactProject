import React from "react";
import TicketS from "./TicketS";

const Ticket = ({ Ticket }) => {
  return (
    <TicketS>
      <p>biglietto id: {Ticket.id}</p>
      <h3>partenza da: {Ticket.from}</h3>
      <p>in data: {Ticket.date}</p>
      <p>al prezzo di: {Ticket.price} €</p>
      <button>Acquista</button>
    </TicketS>
  );
};

export default Ticket;
