import styled from "styled-components";

const CarouselS = styled.div`
  padding: 100px 80px;

  .slideShow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    margin: auto;
  }

 /*  .slide {
    position: relative;
    /* width: 90%; 
    height: 300px;
    display: none;
  }

  .slide.active {
    display: block;
  }

  .slide img {
    /* width: 100%; 
    height: 100%;
  }

  .img_info {
    position: absolute;
    bottom: 50px;
    text-align: center;
    color: white;
  }

  .slide_title {
    font-size: 24px;
    color: white;
    margin-bottom: 10px;
  } */

  .arrow {
    font-size: 35px;
    cursor: pointer;
    color: black;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
  }

  .arrow:hover {
    color: #0072e1;
    transform: scale(1.3);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    .Carousel {
      padding: 100px 0;
    }

    .slideShow {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .slideShow {
      width: 95%;
      margin: auto;
    }

    .arrow_container {
      display: none;
    }

    .slide {
      width: 100%;
    }
  }
`;

export default CarouselS;
