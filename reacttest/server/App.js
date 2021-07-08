const express = require("express");
const app = express();
const cors = require("cors");
const moment = require("moment");
var dayjs = require("dayjs");
var isTomorrow = require("dayjs/plugin/isTomorrow");
var isYesterday = require("dayjs/plugin/isYesterday");
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
    andata: "2021-12-01",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",

    prezzo: 200,
  },
  {
    id: 2,
    andata: "2021-12-01",
    da: "Roma",
    a: "Milano",
    mezzo: "Aereo",
    prezzo: 400,
  },
  {
    id: 3,
    andata: "2021-11-30",
    da: "Milano",
    a: "Roma",
    mezzo: "Aereo",
    prezzo: 600,
  },
  {
    id: 4,
    andata: "2021-04-01",
    da: "Napoli",
    a: "Torino",
    mezzo: "Aereo",
    prezzo: 600,
  },
  {
    id: 5,
    andata: "2021-12-02",
    da: "Roma",
    a: "Milano",
    mezzo: "Aereo",
    prezzo: 600,
  },
];

app.get("/", (req, res) => {
  const UserReq = req.query;
  /* console.log(UserReq); */
  /* console.log(moment(UserReq.andata, 'YYYY-DD-DD')); */
  /* console.log(dayjs(UserReq.andata).format('DD/MM/YYYY')); */
  let TiketBack = [];
  let SuggestedTiketBack = [];
  const Tiket = Data.filter((element) => {
    return (
      dayjs(element.andata).format("DD/MM/YYYY") == dayjs(UserReq.andata).format("DD/MM/YYYY") &&
      element.da == UserReq.da &&
      element.a == UserReq.a
    );
  });

  const SuggestTiket = Data.filter((element) => {
    return (
      dayjs(element.andata).format("DD/MM/YYYY") == dayjs(UserReq.andata).add(-1, 'day').format("DD/MM/YYYY") &&
      element.da == UserReq.da &&
      element.a == UserReq.a
    );
  });

  if (UserReq.back) {
    TiketBack = Data.filter((element) => {
        return (
          dayjs(element.andata).format("DD/MM/YYYY") == dayjs(UserReq.ritorno).format("DD/MM/YYYY") &&
          element.da == UserReq.a &&
          element.a == UserReq.da
        );
      });

      SuggestedTiketBack = Data.filter((element) => {
        return (
          dayjs(element.andata).format("DD/MM/YYYY") == dayjs(UserReq.ritorno).add(1, 'day').format("DD/MM/YYYY") &&
          element.da == UserReq.a &&
          element.a == UserReq.da
        );
      });
  }

  let formatJson = {
      andata: [...Tiket],
      ritorno: [...TiketBack],
      suggested: {
          andata : [...SuggestTiket],
          ritorno: [...SuggestedTiketBack]
      }
  }
  res.json(formatJson);
  /* res.send(); */
});

app.listen(port, () => console.log(`Example app listening on port port!`));
