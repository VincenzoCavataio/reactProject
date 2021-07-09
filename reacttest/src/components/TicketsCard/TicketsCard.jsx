import React from 'react'
import { useLocation } from 'react-router'


const TicketsCard = () => {
    let location = useLocation()
    return (
        <div>
            {
                location.state.tikets.departure.map(e =>{
                    return (
                        <div>
                            <p>biglietto id: {e.id}</p>
                            <h3>partenza da: {e.from}</h3>
                            <p>in data: {e.date}</p>
                            <p>al prezzo di: {e.price} €</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TicketsCard

