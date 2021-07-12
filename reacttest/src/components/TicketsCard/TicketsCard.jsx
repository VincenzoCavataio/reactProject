import React from 'react'
import { useLocation } from 'react-router'
import Ticket from '../Tickets'
import TicketsCardS from './TicketsCardS'


const ShowHideTickets = (props) => {
    const {tickets} = props 
    console.log(tickets);
    /* return <h1>ok</h1> */
    if (tickets !== {}) {
        return tickets.map(e =>{
            return (
                <Ticket Ticket={e} key={e.id}/>
            )
        })
    } else {
        return <h3>nessun biglietto torvato</h3>
    }
}

const TicketsCard = () => {
    let location = useLocation()
    /* console.log(location.state.tickets); */
    console.log(location);
    const Tikets = location.state && location.state.tickets || {}
    return (
        <TicketsCardS>
            <h4>-Andata:</h4>
            <ShowHideTickets tickets={Tikets.departure} />
            <h4>-ritorno:</h4>
            <ShowHideTickets tickets={Tikets.leave} />
            <h4>-Consigliati per l'andata:</h4>
            <ShowHideTickets tickets={Tikets.suggested.departure} />
            <h4>-Consigliati per il ritorno:</h4>
            <ShowHideTickets tickets={Tikets.suggested.leave} />
        </TicketsCardS>
    )
}

export default TicketsCard

