const express = require("express");
const app = express();
const cors = require("cors");
const moment = require("moment");
var dayjs = require("dayjs");
var isTomorrow = require("dayjs/plugin/isTomorrow");
var isYesterday = require("dayjs/plugin/isYesterday");
/* const Tikets = require('./db/Tikets'); */
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
      date: "2021-12-01",
      from: "Milano",
      to: "Roma",
      vehicle: "Aereo",
      price: 20,
    },
    {
      id: 2,
      date: "2021-12-01",
      from: "Roma",
      to: "Milano",
      vehicle: "Aereo",
      price: 40,
    },
    {
      id: 3,
      date: "2021-11-30",
      from: "Milano",
      to: "Roma",
      vehicle: "Aereo",
      price: 55,
    },
    {
      id: 4,
      date: "2022-06-03",
      from: "Napoli",
      to: "Torino",
      vehicle: "Aereo",
      price: 60,
    },
    {
      id: 5,
      date: "2022-01-02",
      from: "Venezia",
      to: "Milano",
      veichle: "Aereo",
      price: 60,
    },
    {
      id: 6,
      date: "2021-09-13",
      from: "Napoli",
      to: "Torino",
      vehicle: "Aereo",
      price: 20,
    },
    {
      id: 7,
      date: "2021-12-01",
      from: "Roma",
      to: "Milano",
      vehicle: "Aereo",
      price: 100,
    },
    {
      id: 8,
      date: "2021-11-30",
      from: "Milano",
      to: "Roma",
      vehicle: "Aereo",
      price: 60,
    },
    {
      id: 9,
      date: "2021-09-22",
      from: "Torino",
      to: "Napoli",
      vehicle: "Aereo",
      price: 40,
    },
    {
      id: 10,
      date: "2021-12-02",
      from: "Milano",
      to: "Roma",
      veichle: "Aereo",
      price: 70,
    },
  ];

app.get("/", (req, res) => {
  const UserReq = req.query;
  /* console.log(UserReq); */
  /* console.log(moment(UserReq.andata, 'YYYY-DD-DD')); */
  /* console.log(dayjs(UserReq.andata).format('DD/MM/YYYY')); */
  let TiketBack = [];
  let SuggestedTiketBack = [];

  /* const GetTiket = (arr, {query}) => {
    const FilteredArray = arr.filter((element) => {
      return (
        dayjs(element.andata).format("DD/MM/YYYY") == dayjs(query.andata).format("DD/MM/YYYY") &&
        element.da == query.da &&
        element.a == query.a
      );
    });

    return FilteredArray
  }; */

  const Tiket = Data.filter((element) => {
    return (
      dayjs(element.date).format("DD/MM/YYYY") ==
        dayjs(UserReq.date).format("DD/MM/YYYY") &&
      element.from == UserReq.from &&
      element.to == UserReq.to
    );
  });

  const SuggestTiket = Data.filter((element) => {
    return (
      dayjs(element.date).format("DD/MM/YYYY") ==
        dayjs(UserReq.date).add(-1, "day").format("DD/MM/YYYY") &&
      element.from == UserReq.from &&
      element.to == UserReq.to
    );
  });

  if (UserReq.back) {
    TiketBack = Data.filter((element) => {
      return (
        dayjs(element.date).format("DD/MM/YYYY") ==
          dayjs(UserReq.leave).format("DD/MM/YYYY") &&
        element.from == UserReq.to &&
        element.to == UserReq.from
      );
    });

    SuggestedTiketBack = Data.filter((element) => {
      return (
        dayjs(element.date).format("DD/MM/YYYY") ==
          dayjs(UserReq.leave).add(1, "day").format("DD/MM/YYYY") &&
        element.from == UserReq.to &&
        element.to == UserReq.from
      );
    });
  }

  let formatJson = {
    departure: [...Tiket],
    leave: [...TiketBack],
    suggested: {
      departure: [...SuggestTiket],
      leave: [...SuggestedTiketBack]
    },
  };
  res.json(formatJson);
  /* res.send(); */
});

app.listen(port, () => console.log(`Example app listening on port port!`));
