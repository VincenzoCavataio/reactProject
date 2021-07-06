import React from "react";

import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import InfoCard from "./components/InfoCard";
import Carousel from "./components/Carousel";

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
        btnClass="btn white big"
      />
      <InfoCard
        /*ci va la props info, per pulizia ora la metto in state* info={array}*/ cardClass=""
      />
      <Carousel
        img="https://i.pinimg.com/originals/c2/05/4c/c2054cd58c7e0f42744bdb84b17faae4.jpg"
        title="Foresta Nera"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        links="articoli riguardo al Foresta Nera"
      />
    </App>
    <Footer
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU"
      imgName="logo del sito"
      links={["home", "about", "travel"]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
