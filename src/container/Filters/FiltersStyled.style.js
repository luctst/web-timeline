import styled from "styled-components";
import variable from "../../styles/helpers/variables"

const FiltersStyled = styled.div`
  height: 6rem;
  margin-bottom: 5%;
  align-items: center;
  box-shadow: $shadowBox;
  display: flex;
  background-color: #fff;
  padding-left: 2%;

  .header--infobar--date {
    display: flex;
    :hover {
      cursor: pointer;
    }
    img {
      width: 20px;
    }
    p {
      font-size: 1.6rem;
      display: inline-block;
      font-weight: lighter;
      margin: 0 10px;
    }
    span {
      font-size: 1.6rem;
      font-weight: bold;
    }
    &--categories {
      flex: 0 0 15%;
    }
  }
  .header--infobar--categories {
    .is__select {
      color: ${variable.inputColor};
      background: none;
      border: none;
      border-radius: 0;
      font-size: 1.6rem;
        :hover {
          cursor: pointer;
        }
    }
  }
  &--date {
    display: flex;
    align-items: center;
  }
  .header--infobar--search {
    margin-left: 29%;
    svg {
      margin-right: 1%;
      width: 3.5%;
    }
  }
`

export default FiltersStyled