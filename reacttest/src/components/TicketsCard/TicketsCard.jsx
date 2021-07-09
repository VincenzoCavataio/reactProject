import React from 'react'
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'


const TicketsCard = () => {
    let location = useLocation()
    
    if (location) {
        {
            location.state.tickets.departure.map(e =>{
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
    }
    
    return (
        <div>
            
        </div>
    )
}

export default TicketsCard

