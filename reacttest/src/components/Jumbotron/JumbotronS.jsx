import styled from "styled-components";

const JumbotronS = styled.div`
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.imgUrl})`};

  .clame {
    padding: 100px 0 0 80px;
  }

  .main_title {
    color: white;
    font-size: 50px;
    text-transform: capitalize;
  }

  .clame_frase {
    margin: 40px 0 25px;
    font-size: 24px;
    color: white;
    text-transform: capitalize;
  }

  @media screen and (max-width: 576px) {
    .clame {
      padding: 100px 0 0 0;
      margin: 0 auto;
      width: 50%;
    }
  }
`;

export default JumbotronS;
