import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#fff' : '#4B59F7')};
  background-color: ${({ transparent }) => (transparent ? 'transparent' : 'primary')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '11px 34px' : '12px 64px')};
  color: ${({ colLabel }) => (colLabel ? '#fff' : '#242424')};
  border: ${({ transparent }) => (transparent ? '1px solid #fff' : 'none')};
  /* border: 2px solid #fff; */
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #fff;
    background-color: ${({ primary }) => (primary ? '#242424' : '#4B59F7')};
    border: ${({ transparent }) => (transparent ? '1px solid #242424' : 'none')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
