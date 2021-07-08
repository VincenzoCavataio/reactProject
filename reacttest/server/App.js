const express = require("express");
const app = express();
const cors = require("cors");
const moment = require("moment");
var dayjs = require("dayjs");
var isTomorrow = require("dayjs/plugin/isTomorrow");
var isYesterday = require('dayjs/plugin/isYesterday');
const port = 8000;

//plugin di dayJs
dayjs.extend(isTomorrow);
dayjs.extend(isYesterday);

//serve per dare i permessi CORS a tutte le rotte
app.use(cors());
//serve per daer body parser a tutte le rotte
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//fake data
const Data = [
  {
    id: 1,
    andata: "2021-12-02",
    ritorno: "2021-12-02",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",

    prezzo: 200,
  },
  {
    id: 2,
    andata: "2021-12-01",
    ritorno: "2021-12-02",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",
    prezzo: 400,
  },
  {
    id: 3,
    andata: "2021-12-02",
    ritorno: "2021-12-03",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",
    prezzo: 600,
  },
  {
    id: 4,
    andata: "12-01-2021",
    ritorno: "4-02-2021",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",
    prezzo: 600,
  },
];

app.get("/", (req, res) => {
  const UserReq = req.query;
  /* console.log(UserReq); */

  const Price = Data.filter((element) => {
    return (
      dayjs(element.andata).format('DD/MM/YYYY') == dayjs(UserReq.andata).format('DD/MM/YYYY') &&
      dayjs(element.ritorno).format('DD/MM/YYYY') == dayjs(UserReq.ritorno).format('DD/MM/YYYY') &&
      element.da == UserReq.da &&
      element.a == UserReq.a
    );
  });

  const Suggested = Data.filter((element) => {
    let dayBefore = dayjs(UserReq.andata).add(-1, 'day').format("DD/MM/YYYY") == dayjs(element.andata).add(-1, 'day').format("DD/MM/YYYY");
    let dayAfter = dayjs(UserReq.ritorno).add(1, 'day').format("DD/MM/YYYY")== dayjs(element.ritorno).add(1, 'day').format("DD/MM/YYYY");
    let isValid = false;

    if (dayBefore || dayAfter) {
        isValid = true;
    }

    return (
      element.da == UserReq.da &&
      element.a == UserReq.a && isValid
    );
  });
  /* console.log(moment(UserReq.andata, 'YYYY-DD-DD')); */
  /* console.log(dayjs(UserReq.andata).format('DD/MM/YYYY')); */
  res.json(Suggested);
  /* res.send(); */
});

app.listen(port, () => console.log(`Example app listening on port port!`));
