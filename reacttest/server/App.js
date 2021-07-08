const express = require("express");
const app = express();
const cors = require("cors");
const moment = require('moment')
var dayjs = require('dayjs')
const port = 8000;

//serve per dare i permessi CORS a tutte le rotte
app.use(cors());
//serve per daer body parser a tutte le rotte
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//fake data
const Data = [
  {
    id: 1,
    andata: "12-1-2021",
    ritorno: "12-1-2021",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",

    prezzo: 200,
  },
  {
    id: 2,
    andata: "4-1-2021",
    ritorno: "9-6-2021",
    da: "Torino",
    a: "Venezia",
    mezzo: "Aereo",
    prezzo: 400,
  },
  {
    id: 3,
    andata: "12-4-2021",
    ritorno: "12-5-2021",
    da: "Napoli",
    a: "Aosta",
    mezzo: "Aereo",
    prezzo: 600,
  },
  {
    id: 4,
    andata: "12-1-2021",
    ritorno: "4-2-2021",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",
    prezzo: 600,
  }
];

app.get("/", (req, res) => {
  const UserReq = req.query;
  /* console.log(UserReq); */
  
  const Price = Data.filter(element => {
      return element.andata == UserReq.andata &&
             element.ritorno == UserReq.ritorno &&
             element.da == UserReq.da &&
             element.a == UserReq.a
  })
  /* console.log(moment(UserReq.andata, 'YYYY-DD-DD')); */
  console.log(dayjs(UserReq.andata).format('DD/MM/YYYY'));
  res.json(Price);
  /* res.send(); */
});

app.listen(port, () => console.log(`Example app listening on port port!`));
