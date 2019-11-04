import styled from "styled-components";
import variable from "../../styles/helpers/variables"

const EventStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column: span 8;
  margin-bottom: 2%;
    .main--left--element--date {
      grid-column: 1/2;
      text-align: center;
      position: relative;
        h3 {
          margin-top: 18px;
          font-size: 1.7rem;
          font-weight: bold;
          color: ${variable.$contentColor};
          line-height: 1;
        }
    }
    .main--left--element--img {
      grid-column: 2/3;
      text-align: center;
      background-color: white;
      position: relative;
      z-index: 9;

      &::before{
        content: "";
        display: block;
        position: absolute;
        height: calc(100% + 2rem);
        border-left: 1px dashed #333;
        top: 0%;
        left: 50%;
        z-index: -1;
      }
    }
    .main--left--element--text {
      grid-column: 3/9;
      border: 0.1rem solid #dbe8fa;
      padding: 15px 10px;
      border-radius: .8rem;
      background-color: #fff;

      h2, p {
        margin-bottom: 2%;
      }
      &:hover{
        box-shadow: $shadowBox;
        cursor: pointer;
      }
      .is__title__element {
        font-size: 1.8rem;
        font-weight: bold;
        letter-spacing: .1rem;
        color: $contentColor;
      }
      .is__content__element {
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.8rem;
        letter-spacing: 0.02rem;
        color: $contentColor;
      }
      .is__content__tag__element {
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: .02rem;
        color : ${variable.$tagColor}
      }
    }

`

export default EventStyled