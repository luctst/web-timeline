import styled from "styled-components";

const EventStyledOverview = styled.div`
  background-color: rgba(0,0,0,0.4);
  height: 100%;
  width: 100%;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 11;
    .main--right--element--wrapper {
      display: grid;
      grid-template-columns: 1fr 25%;
      grid-template-rows: 80% 20%;
      background-color: #fff;
      border: 0.2rem solid #b2d0fa;
      grid-gap: 5rem;
      padding: 1%;
      width: 80%;
      margin: 0 auto;
      margin-top: 5%;

       h2 {
        font-family: "helvetica Neue";
        font-size: 2.4rem;
        font-weight: 300;
        padding-top: 2rem;
        padding-bottom: 1rem;
        text-transform: uppercase;
        display: inline-block;
      }
      h3 {
          font-family: "helvetica Neue";
          font-size: 1.6rem;
          text-transform: uppercase;
          font-weight: 500;
          color: #333;
          padding-bottom: 1rem;
      }
      p {
          padding-bottom: 3rem;
          font-size: 1.4rem;
          color: #333;
          line-height: 2.2rem;
      }
      .separator{
          width: 100%;
          border: solid .5px rgb(90, 90, 90);
          margin-bottom: 3rem;
      }
    }

  .is__arrow__close {
    float: right;
    top: 0;
    color: #aaaaaa;
    font-size: 28px;
    font-weight: bold;

    :hover {
      cursor: pointer;
    }
  }
`

export default EventStyledOverview