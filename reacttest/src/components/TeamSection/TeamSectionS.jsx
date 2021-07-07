import styled from "styled-components";
import AuthorCardS from '../AuthorCard/AuthorCardS';

const TeamSectionS = styled.div`
  h1 {
    text-align: center;
  }

  .teamCards {
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
  }

  ${AuthorCardS} {
    width: 45%;
    margin: 0 auto 20px;
  }

  @media screen and (max-width: 768px) {
    .teamCards {
        flex-direction: column;
    }

    ${AuthorCardS} {
        width: 90%;
    }
}
`;

export default TeamSectionS;
