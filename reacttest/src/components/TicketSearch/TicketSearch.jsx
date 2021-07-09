import React, { Component } from 'react'

export class TicketSearch extends Component {
    render() {
        return (
            <div>
                <label htmlFor="from">Stazione di partenza:</label>
                <select name="from" id="from">
                    <option value="Milano">Milano</option>
                    <option value='Roma'>Roma</option>
                    <option Value="Napoli">Napoli</option>
                    <option Value="Torino">Torino</option>
                </select>
                <label htmlFor="to">Stazione di arrivo:</label>
                <select name="to" id="to">
                    <option value="Milano">Milano</option>
                    <option value='Roma'>Roma</option>
                    <option Value="Napoli">Napoli</option>
                    <option Value="Torino">Torino</option>
                </select>
                <label htmlFor="date">Data partenza</label>
                <input type="date" id='date' name='date' />
                <label htmlFor="back">andata e ritorno </label>
                <input type="checkbox" name="back" id="back" />
                <label htmlFor="date">Data giorno di ritorno</label>
                <input type="date" id='date' name='date' />
            </div>
        )
    }
}

export default TicketSearch
