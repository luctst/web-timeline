import styled from "styled-components";
import variableColor from "../../../../styles/helpers/variables.js";

const SearchBarStyled = styled.div`
  div {
    ul {
      padding: 0;
    }

    li {
      text-decoration: none;
      list-style-type: none;
      padding: 5px;

      :hover {
        background-color: ${variableColor.backgroundColor};
      }
    }

    a {
      text-decoration: none;
      color: black;
      font-size: 1.6em;
    }

    input {
      border: none;
      font-size: 1.6rem;
      outline: none;
      width: 100%;
      margin-left: 15px;

      :hover {
        border-bottom: 1px solid ${variableColor.inputColor};
      }

      :focus {
        border-bottom: 1px solid ${variableColor.inputColor};
        cursor: text;
      }
    }
  }
`
export default SearchBarStyled