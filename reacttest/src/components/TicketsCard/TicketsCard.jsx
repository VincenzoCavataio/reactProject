import React from 'react'
import { useLocation } from 'react-router'


const ShowHideTickets = (props) => {
    const {tickets} = props 
    console.log(tickets);
    /* return <h1>ok</h1> */
    if (tickets !== {}) {
        return tickets.departure.map(e =>{
            return (
                <div>
                    <p>biglietto id: {e.id}</p>
                    <h3>partenza da: {e.from}</h3>
                    <p>in data: {e.date}</p>
                    <p>al prezzo di: {e.price} €</p>
                </div>
            )
        })
    } else {
        return <h3>no ticket</h3>
    }
}

const TicketsCard = () => {
    let location = useLocation()
    /* console.log(location.state.tickets); */
    console.log(location);
    const Tikets = location.state && location.state.tickets || {}
    return (
        <div>
            <ShowHideTickets tickets={Tikets} />
        </div>
    )
}

export default TicketsCard

