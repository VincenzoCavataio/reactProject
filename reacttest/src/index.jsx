import React from "react";

import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import InfoCard from "./components/InfoCard";

ReactDOM.render(
  <React.StrictMode>
    <Header
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU"
      imgName="logo del sito"
      links={["home", "about", "travel"]}
    />
    <App>
      <Jumbotron
        imgUrl="https://www.valvoleitalia.it/wp-content/uploads/2014/12/img_banner-thin_mountains.jpg"
        title="Viaggi e sogni"
        clame="sogna viaggiando"
        action="viaggia qui"
        btnClass='btn white big'
      />
      <InfoCard /*ci va la props info, per pulizia ora la metto in state* info={array}*/ cardClass='' />
    </App>
    <Footer
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU"
      imgName="logo del sito"
      links={["home", "about", "travel"]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
