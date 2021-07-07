import React from "react";

import ReactDOM from "react-dom";
import App from "./components/App";
import "./style/main.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import InfoCard from "./components/InfoCard";
import Carousel from "./components/Carousel";
import PageOne from "./pages/PageOne";
import Article from "./components/Article";
import AuthorCard from "./components/AuthorCard";
import TeamSection from "./components/TeamSection";
import { BrowserRouter as Router, Route } from "react-router-dom";
//ricordo di fare array e oggetti vari
//cambio pagine

//fakeData
const Gallery = [
  {
    id: 1,
    img: "https://i.pinimg.com/originals/c2/05/4c/c2054cd58c7e0f42744bdb84b17faae4.jpg",
    title: "Foresta Nera",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    links: "articoli riguardo al Foresta Nera",
  },
  {
    id: 2,
    img: "https://www.panorama.it/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNDQzOTI3MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0MjEyMTczNH0.SOelXuarXHvwyznoiETVBo5LSTrl4-A84eybBxXtqv0/image.jpg?width=1200&coordinates=0%2C125%2C0%2C125&height=600",
    title: "Foresta Nera",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    links: "articoli riguardo al Foresta Nera",
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2018/06/20/18/39/mediterranean-3487098_960_720.jpg",
    title: "Foresta Nera",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    links: "articoli riguardo al Foresta Nera",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU"
        imgName="logo del sito"
        links={["home", "about", "travel"]}
      />
      <App>
        <Route exact path="/home">
          <PageOne>
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
            <Carousel imgs={Gallery} />
          </PageOne>
        </Route>
        <Route exact path="/about">
          <PageOne pageTitle="About">
            <InfoCard
              /*ci va la props info, per pulizia ora la metto in state* info={array}*/ cardClass=""
            />
            <TeamSection>
              <AuthorCard
                img="https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg"
                authorName="Marco Asdrubalini"
                authorRole="CEO"
                bio="Sono il CEO di LoGo e scrivo articoli sui viaggi"
              />
              <AuthorCard
                img="https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg"
                authorName="Marco Asdrubalini"
                authorRole="CEO"
                bio="Sono il CEO di LoGo e scrivo articoli sui viaggi"
              />
              <AuthorCard
                img="https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg"
                authorName="Marco Asdrubalini"
                authorRole="CEO"
                bio="Sono il CEO di LoGo e scrivo articoli sui viaggi"
              />
              <AuthorCard
                img="https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg"
                authorName="Marco Asdrubalini"
                authorRole="CEO"
                bio="Sono il CEO di LoGo e scrivo articoli sui viaggi"
              />
            </TeamSection>
          </PageOne>
        </Route>
        <Route exact path="/travel">
          <PageOne pageTitle="Travel">
            <div className="article_group">
              <Article
                reverse={true}
                img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o="
                title="Articolo 1"
                body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"
              />
              <AuthorCard
                img="https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg"
                authorName="Marco Asdrubalini"
                authorRole="CEO"
                bio="Sono il CEO di LoGo e scrivo articoli sui viaggi"
              />
            </div>
            <div className="article_group">
              <Article
                reverse={true}
                img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o="
                title="Articolo 1"
                body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"
              />
              <AuthorCard
                img="https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg"
                authorName="Marco Asdrubalini"
                authorRole="CEO"
                bio="Sono il CEO di LoGo e scrivo articoli sui viaggi"
              />
            </div>

            <Jumbotron
              imgUrl="https://ilreporter.it/wp-content/uploads/2020/05/viaggi-estero-coronavirus-696x522.jpg"
              title="Qui trovia altri articoli sui viaggi"
              clame="molto altro nelle nostre rubriche"
              action="altri articoli"
              btnClass="btn white big"
            />
          </PageOne>
        </Route>
      </App>
      <Footer
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU"
        imgName="logo del sito"
        links={["home", "about", "travel"]}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
