import React, { Component } from "react";
import { Redirect } from "react-router";
import Dpicker from "../Dpicker";
import TiketSearchS from "./TiketSearchS";
import axios from "axios";

export class TiketSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: "",
      to: "",
      date: "",
      leave: "",
      back: false,
      tickets: [],
      redirect: false,
      isActive: false
    };

    this.HandleValue = this.HandleValue.bind(this);
    this.findTickets = this.findTickets.bind(this);
    this.HandleCheck = this.HandleCheck.bind(this);
    /* this.isActive = this.isActive.bind(this); */
  }

  HandleValue(e, key) {
    this.setState({ [key]: e.target.value });
  }

  HandleCheck() {
    this.setState({ back: !this.state.back });
  }

  findTickets() {
    try {
      axios
        .get("http://localhost:8000/api/tikets", {
          params: {
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            back: this.state.back,
            leave: this.state.leave,
          },
        })
        .then((res) => {
          this.setState({ tickets: res.data, redirect: true });
        });
    } catch (error) {
      throw new Error("Qualcosa è andato storto");
    }
  }

  isActive() {
    const { from, to, date } = this.state;

    if (from && to && date) {
      this.setState({isActive: true}) 
    }

  }

  render() {
    let redirect = false;
    if (this.state.redirect) {
      redirect = (
        <Redirect
          to={{
            pathname: "/tickets",
            state: { tickets: this.state.tickets },
          }}
        />
      );
    }
    return (
      <TiketSearchS>
        {/* <label htmlFor="from">Stazione di partenza:</label> */}
        <select
          name="from"
          id="from"
          placeholder="stazione di partenza"
          onChange={(e) => this.HandleValue(e, "from")}
        >
          {this.props.from.map((element, index) => {
            return (
              <option value={element} key={index}>
                {element}
              </option>
            );
          })}
        </select>
        {/* <label htmlFor="to">Stazione di arrivo:</label> */}
        <select
          name="to"
          id="to"
          placeholder="stazione di arrivo"
          onChange={(e) => this.HandleValue(e, "to")}
        >
          {this.props.to.map((element, index) => {
            return (
              <option value={element} key={index}>
                {element}
              </option>
            );
          })}
        </select>
        {/* <label htmlFor="date">Data partenza</label> */}
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => this.HandleValue(e, "date")}
        />
        {/* <Dpicker /> */}
        <div className="leave">
          <label htmlFor="back">andata e ritorno </label>
          <input
            type="checkbox"
            name="back"
            id="back"
            checked={this.state.back}
            onChange={this.HandleCheck}
          />
          {/* <label htmlFor="date">Data giorno di ritorno</label>  */}
          <input
            type="date"
            id="leave"
            name="leave"
            onChange={(e) => this.HandleValue(e, "leave")}
            disabled={!this.state.back}
          />
          {/* <Dpicker /> */}
        </div>
        <button onClick={this.findTickets} disabled={!this.isActive}>
          Cerca disponibilità
        </button>
        {redirect}
      </TiketSearchS>
    );
  }
}

export default TiketSearch;
