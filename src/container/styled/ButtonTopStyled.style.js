import styled from 'styled-components'
import variables from "./variables";

const ButtonTopStyled = styled.button`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: ${variables.backgroundColor};
  opacity: 0.4;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  font-size: 12px;
    :hover {
      background-color: ${variables.backgroundColor};
      opacity: 1;
    }
  `

export default ButtonTopStyled