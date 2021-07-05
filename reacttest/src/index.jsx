import React from "react";

import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/main.css"
import Header from "./components/Header"
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU' imgName='logo del sito' links={['home', 'about', 'travel']}/>
    <App />
    <Footer logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU' imgName='logo del sito' links={['home', 'about', 'travel']}/>
  </React.StrictMode>,
  document.getElementById("root")
);
