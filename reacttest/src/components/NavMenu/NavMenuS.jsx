import styled from "styled-components";

const NavMenuS = styled.div`
  display: flex;
  width: 100%;
  .logo {
    max-height: 100px;
  }

  .logo img {
    width: 50%;
  }

  nav {
    margin: auto;
  }

  .link_list {
    display: flex;
  }

  .link_list li {
    cursor: pointer;
  }

  .link_list li:not(:last-child) {
    margin-right: 20px;
  }
`;

export default NavMenuS;
