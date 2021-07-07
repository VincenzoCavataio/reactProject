import styled from "styled-components";

const SlideS = styled.div`
  position: relative;
  /* width: 90%; */
  /* height: 300px; */
  width: 80%;
  display: none;

  &.active {
    display: block;
  }

  img {
    width: 100%;
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
  }
`;

export default SlideS;
