import styled from "styled-components";

const HeaderStyled = styled.h1 `
  color: $contentColor;
  font-family: "helvetica Neue";
  line-height: 0.7em;
  font-size: 3rem;
  font-weight: 300;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  min-height: 5rem;
`

export default HeaderStyled;