import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";


export class TiketSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: "",
      to: "",
      date: "",
      leave: "",
      back: true,
      tikets: [],
      redirect: false
    };

    this.HandleValue = this.HandleValue.bind(this);
    this.findTickets = this.findTickets.bind(this);
  }

  HandleValue(e, key) {
    this.setState({ [key]: e.target.value });
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
          this.setState({tikets: res.data, redirect: true});
        });
    } catch (error) {
      throw new Error("Qualcosa è andato storto");
    }
  }

  render() {
      let redirect = false;
      if (this.state.redirect) {
          redirect = <Redirect
          to={{
            pathname: "/book",
            state: { tikets: this.state.tikets }
          }}
        />
      }
    return (
      <div>
        {/* <label htmlFor="from">Stazione di partenza:</label> */}
        <select
          name="from"
          id="from"
          placeholder="stazione di partenza"
          onChange={(e) => this.HandleValue(e, "from")}
        >
          {this.props.from.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
        {/* <label htmlFor="to">Stazione di arrivo:</label> */}
        <select
          name="to"
          id="to"
          placeholder="stazione di arrivo"
          onChange={(e) => this.HandleValue(e, "to")}
        >
          {this.props.to.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
        {/* <label htmlFor="date">Data partenza</label> */}
        <input
          type="date"
          id="date"
          name="date"
          onChange={(e) => this.HandleValue(e, "date")}
        />
        {/* <label htmlFor="back">andata e ritorno </label> */}
        <input type="checkbox" name="back" id="back" />
        {/* <label htmlFor="date">Data giorno di ritorno</label> */}
        <input
          type="date"
          id="leave"
          name="leave"
          onChange={(e) => this.HandleValue(e, "leave")}
        />
        <button onClick={this.findTickets}>Cerca disponobolità</button>
        {redirect}
      </div>
    );
  }
}

export default TiketSearch;
