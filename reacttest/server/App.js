const express = require("express");
const app = express();
const cors = require("cors");
var dayjs = require("dayjs");
var isTomorrow = require("dayjs/plugin/isTomorrow");
var isYesterday = require("dayjs/plugin/isYesterday");
const Tikets = require("./db/Tikets");
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
const Data = Tikets;

app.get("/", (req, res) => {
  const UserReq = req.query;
  /* console.log(UserReq); */
  /* console.log(dayjs(UserReq.date).add(0, 'day').format('DD/MM/YYYY')); */
  let TiketBack = [];
  let SuggestedTiketBack = [];

  const GetTiket = (arr, query, offset) => {
    const FilteredArray = arr.filter((element) => {
      return (
        dayjs(element.date).format("DD/MM/YYYY") ==
          dayjs(query.date).add(offset, "day").format("DD/MM/YYYY") &&
        element.from == query.from &&
        element.to == query.to
      );
    });

    return FilteredArray;
  };

  const GetTiketBack = (arr, query, offset) => {
    const FilteredArray = arr.filter((element) => {
      return (
        dayjs(element.date).format("DD/MM/YYYY") ==
          dayjs(query.leave).add(offset, "day").format("DD/MM/YYYY") &&
        element.from == query.to &&
        element.to == query.from
      );
    });

    return FilteredArray;
  };

  const Tiket = GetTiket(Data, UserReq, 0);

  const SuggestTiket = GetTiket(Data, UserReq, -1);

  if (UserReq.back) {
    TiketBack = GetTiketBack(Data, UserReq, 0);

    SuggestedTiketBack = GetTiketBack(Data, UserReq, -1);
  }

  let formatJson = {
    departure: [...Tiket],
    leave: [...TiketBack],
    suggested: {
      departure: [...SuggestTiket],
      leave: [...SuggestedTiketBack],
    },
  };
  res.json(formatJson);
  /* res.send(); */
});

app.listen(port, () => console.log(`Example app listening on port port!`));
