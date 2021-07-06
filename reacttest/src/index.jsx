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
import TeamSection from './components/TeamSection'

ReactDOM.render(
  <React.StrictMode>
    <Header
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU"
      imgName="logo del sito"
      links={["home", "about", "travel"]}
    />
    <App>
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
        <Carousel
          img="https://i.pinimg.com/originals/c2/05/4c/c2054cd58c7e0f42744bdb84b17faae4.jpg"
          title="Foresta Nera"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          links="articoli riguardo al Foresta Nera"
        />
      </PageOne>
      <PageOne pageTitle='About'>
        <Carousel
          img="https://i.pinimg.com/originals/c2/05/4c/c2054cd58c7e0f42744bdb84b17faae4.jpg"
          title="Foresta Nera"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
          links="articoli riguardo al Foresta Nera"
        />
        <InfoCard
            /*ci va la props info, per pulizia ora la metto in state* info={array}*/ cardClass=""
        />
        <TeamSection>
          <AuthorCard img='https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg' authorName='Marco Asdrubalini' authorRole='CEO' bio='Sono il CEO di LoGo e scrivo articoli sui viaggi'/>
          <AuthorCard img='https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg' authorName='Marco Asdrubalini' authorRole='CEO' bio='Sono il CEO di LoGo e scrivo articoli sui viaggi'/>
          <AuthorCard img='https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg' authorName='Marco Asdrubalini' authorRole='CEO' bio='Sono il CEO di LoGo e scrivo articoli sui viaggi'/>
          <AuthorCard img='https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg' authorName='Marco Asdrubalini' authorRole='CEO' bio='Sono il CEO di LoGo e scrivo articoli sui viaggi'/>
        </TeamSection>
      </PageOne>
      <PageOne pageTitle='Travel'>
      <div className='article_group'>
        <Article
          reverse={true}
          img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o="
          title='Articolo 1'
          body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,'
        />
        <AuthorCard img='https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg' authorName='Marco Asdrubalini' authorRole='CEO' bio='Sono il CEO di LoGo e scrivo articoli sui viaggi'/> 
      </div>
      <div className='article_group'>
        <Article
          reverse={true}
          img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/78809294.jpg?k=cf850d507a9671cf7ff85d598435ea329a28cd4f1b1abc25c1892c91156d36ad&o="
          title='Articolo 1'
          body='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,'
        />
        <AuthorCard img='https://citynews-today.stgy.ovh/~media/original-hi/65337185652595/43450357_m-2.jpg' authorName='Marco Asdrubalini' authorRole='CEO' bio='Sono il CEO di LoGo e scrivo articoli sui viaggi'/>
      </div>
      
      <Jumbotron
        imgUrl="https://ilreporter.it/wp-content/uploads/2020/05/viaggi-estero-coronavirus-696x522.jpg"
        title="Qui trovia ltri articoli sui viaggi"
        clame="molto altro nelle nostre rubriche"
        action="altri articoli"
        btnClass="btn white big"
      />    
      </PageOne>
    </App>
    <Footer
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU"
      imgName="logo del sito"
      links={["home", "about", "travel"]}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
