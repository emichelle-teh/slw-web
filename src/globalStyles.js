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
//For Navbar and Community Seciton
export const Button1 = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  border-radius: 4px;
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ primary }) => (primary ? '#3858CC' : 'transparent')};
  color: ${({ colLabel }) => (colLabel ? '#fff' : '#FFD6D0')};
  border: ${({ btnBorder }) => (btnBorder ? 'none' : '1px solid #FFD6D0')};
  padding: ${({ btnPadding }) => ((btnPadding ? '11px 34px' : '4px 21px'))};
  font-size: ${({ fontSize }) => (fontSize ? '20px' : '12px')};
  outline: none;
  cursor: pointer;
  
  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? '#fff' : 'transparent')};
    color: ${({ colLabel }) => (colLabel ? '#3858CC' : 'none')};
    border: ${({ btnBorder }) => (btnBorder ? 'none' : 'none')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
//For Cover & Statistic Section
export const Button2 = styled.button`
  border-radius: 12px;
  white-space: nowrap;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  background-color: ${({ primary }) => (primary ? '#fff' : 'transparent')};
  color: ${({ colLabel }) => (colLabel ? '#CE1A3A' : '#fff')};
  border: ${({ btnBorder }) => (btnBorder ? 'none' : '2px solid #DB303B')};
  padding: ${({ btnPadding }) => ((btnPadding ? '4px 21px' : '10px 34px'))};
  font-size: ${({ fontSize }) => (fontSize ? '18px' : '16px')};
  outline: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ primary }) => (primary ? '#EF5D5D' : '#fff')};
    color: ${({ colLabel }) => (colLabel ? '#fff' : '#CE1A3A')};
    border: ${({ btnBorder }) => (btnBorder ? 'none' : 'none')};
    padding: ${({ btnPadding }) => ((btnPadding ? '4px 21px' : '12px 34px'))};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
//For Information Section
export const Button3 = styled.button`
  border-radius: 12px;
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  text-align: center;
  background-color: ${({ primary }) => (primary ? '#EF5D5D' : 'transparent')};
  color: ${({ colLabel }) => (colLabel ? '#fff' : '#EF5D5D')};
  border: ${({ btnBorder }) => (btnBorder ? 'none' : '2px solid #EF5D5D')};
  padding: ${({ btnPadding }) => ((btnPadding ? '12px 64px' : '10px 32px'))};
  font-size: ${({ fontSize }) => (fontSize ? '16px' : '16px')};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? 'transparent' : '#EF5D5D')};
    color: ${({ colLabel }) => (colLabel ? '#EF5D5D' : '#fff')};
    border: ${({ primary }) => (primary ? '2px solid #EF5D5D' : 'none')};
    padding: ${({ btnPadding }) => ((btnPadding ? '10px 62px' : '12px 34px'))};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export default GlobalStyle;
