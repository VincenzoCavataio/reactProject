import React, { Component } from "react";
import axios from "axios";

export class TiketSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: [],
      to: [],
    };
  }

  componentDidMount() {
    try {
      axios.get("http://localhost:8000/api/allCity").then((res) => {
        this.setState({ from: res.data.from, to: res.data.to });
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {/* <label htmlFor="from">Stazione di partenza:</label> */}
        <select name="from" id="from" placeholder="stazione di partenza">
          {this.state.from.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
        {/* <label htmlFor="to">Stazione di arrivo:</label> */}
        <select name="to" id="to" placeholder="stazione di arrivo">
          {this.state.to.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
        {/* <label htmlFor="date">Data partenza</label> */}
        <input type="date" id="date" name="date" />
        {/* <label htmlFor="back">andata e ritorno </label> */}
        <input type="checkbox" name="back" id="back" />
        {/* <label htmlFor="date">Data giorno di ritorno</label> */}
        <input type="date" id="date" name="date" />
        <button>Cerca disponobolità</button>
      </div>
    );
  }
}

export default TiketSearch;
