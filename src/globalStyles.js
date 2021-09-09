import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-display: optional;
  font-family: Nunito;
  font-style: normal;
 } 
 html {
   scroll-behavior: smooth;
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

//Contact Form and Info Partner Section in Contact Us Page
export const Button1 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "#3858CC" : "transparent")};
  color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "#4962BB")};
  border: ${({ btnBorder }) =>
    btnBorder ? "2px solid #3858CC" : "2px solid #4962BB"};
  padding: ${({ btnPadding }) =>
    btnPadding ? "0.6rem 2.2rem" : "0.6rem 2.2rem"};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1.2rem" : "1.2rem")};
  border-radius: 8.40803px;
  width: 400px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? "transparent" : "#3858CC")};
    color: ${({ colLabel }) => (colLabel ? "#4962BB" : "#FFFFFF")};
    border: ${({ btnBorder }) =>
      btnBorder ? "2px solid #4962BB" : "2px solid #3858CC"};
  }
  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
    width: 100%;
    border-radius: 100px;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;
//For Story Section
export const Button2 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "#FF565E" : "none")};
  color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "none")};
  border: ${({ btnBorder }) => (btnBorder ? "2px solid #FF565E" : "none")};
  padding: ${({ btnPadding }) => (btnPadding ? "0.6rem 2.2rem" : "none")};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1.2rem" : "none")};
  border-radius: 100px;
  width: ${({ btnWidth }) => (btnWidth ? "200px" : "auto")};
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    box-sizing: border-box;
    background-color: ${({ primary }) => (primary ? "transparent" : "none")};
    color: ${({ colLabel }) => (colLabel ? "#FF866B" : "none")};
    border: ${({ btnBorder }) => (btnBorder ? "2px solid #FF866B" : "none")};
  }

  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    padding: 0.4rem 2rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

//For Home Cover Section and Get Involved Cover Card Section
export const Button3 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "#3858CC" : "#FFFFFF")};
  color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "#091F6B")};
  border: ${({ btnBorder }) =>
    btnBorder ? "2px solid #3858CC" : "2px solid #FFFFFF"};
  padding: ${({ btnPadding }) =>
    btnPadding ? "0.6rem 2.2rem" : "0.6rem 2.2rem"};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1.2rem" : "1.2rem")};
  border-radius: 100px;
  width: ${({ btnWidth }) => (btnWidth ? "180px" : "auto")};
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

//For Card Community in HomePage
export const Button4 = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  line-height: 170.3%;
  background-color: ${({ primary }) => (primary ? "#6C8FFF" : "none")};
  color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "none")};
  border: ${({ btnBorder }) => (btnBorder ? "2px solid #6C8FFF" : "none")};
  padding: ${({ btnPadding }) => (btnPadding ? "0.4rem 2rem" : "none")};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1rem" : "none")};
  border-radius: 12px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    box-sizing: border-box;
    background-color: ${({ primary }) => (primary ? "transparent" : "none")};
    color: ${({ colLabel }) => (colLabel ? "#6C8FFF" : "none")};
    border: ${({ btnBorder }) => (btnBorder ? "2px solid #6C8FFF" : "none")};
  }

  @media screen and (max-width: 541px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

//For Information Section at Home Page
export const Button5 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "#FFFFFF" : "transparent")};
  color: ${({ colLabel }) => (colLabel ? "#1B3EBC" : "#FFFFFF")};
  border: ${({ btnBorder }) =>
    btnBorder ? "2px solid #FFFFFF" : "2px solid #FFFFFF"};
  padding: ${({ btnPadding }) =>
    btnPadding ? "0.6rem 2.2rem" : "0.6rem 2.2rem"};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1.2rem" : "1.2rem")};
  border-radius: 100px;
  width: 250px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    box-sizing: border-box;
    background-color: ${({ primary }) => (primary ? "#1B3EBC" : "#FFFFFF")};
    color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "#1B3EBC")};
    border: ${({ btnBorder }) =>
      btnBorder ? "2px solid #1B3EBC" : "2px solid #FFFFFF"};
  }

  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

//For Advisor Section
export const Button6 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "transparent" : "#3858CC")};
  color: ${({ colLabel }) => (colLabel ? "#3858CC" : "#FFFFFF")};
  border: ${({ btnBorder }) =>
    btnBorder ? "2px solid #3858CC" : "2px solid #3858CC"};
  padding: ${({ btnPadding }) =>
    btnPadding ? "0.6rem 2.2rem" : "0.6rem 2.2rem"};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1.2rem" : "1.2rem")};
  border-radius: 100px;
  width: 220px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#5373E3" : "transparent")};
    color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "#3858CC")};
    border: ${({ btnBorder }) =>
      btnBorder ? "2px solid #5373E3" : "2px solid #5373E3"};
  }

  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

//For Community Cover Section
export const Button7 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "transparent" : "none")};
  color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "none")};
  border: ${({ btnBorder }) => (btnBorder ? "2px solid #FFFFFF" : "none")};
  padding: ${({ btnPadding }) => (btnPadding ? "0.6rem 2rem" : "none")};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1rem" : "none")};
  border-radius: 33px;
  width: 140px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#FFFFFF" : "none")};
    color: ${({ colLabel }) => (colLabel ? "#3858CC" : "none")};
    border: ${({ btnBorder }) => (btnBorder ? "2px solid #FFFFFF" : "none")};
  }

  @media screen and (max-width: 769px) {
    width: 150px;
  }
  @media screen and (max-width: 541px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

//For Community Creative Content and Discord Section and Spotify Section
export const Button8 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "#325EFC" : "none")};
  color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "none")};
  border: ${({ btnBorder }) => (btnBorder ? "2px solid #325EFC" : "none")};
  padding: ${({ btnPadding }) => (btnPadding ? "0.4rem 2rem" : "none")};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1rem" : "none")};
  border-radius: 33px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "transparent" : "none")};
    color: ${({ colLabel }) => (colLabel ? "#325EFC" : "none")};
    border: ${({ btnBorder }) => (btnBorder ? "2px solid #325EFC" : "none")};
  }

  @media screen and (max-width: 541px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

//For Community Information Section
export const Button9 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "#FFFFFF" : "transparent")};
  color: ${({ colLabel }) => (colLabel ? "#4962BB" : "#FFFFFF")};
  border: ${({ btnBorder }) =>
    btnBorder ? "2px solid #FFFFFF" : "2px solid #FFFFFF"};
  padding: ${({ btnPadding }) =>
    btnPadding ? "0.6rem 2.2rem" : "0.6rem 2.2rem"};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1.2rem" : "1.2rem")};
  border-radius: 6px;
  width: 300px;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "transparent" : "#FFFFFF")};
    color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "#4962BB")};
    border: ${({ btnBorder }) =>
      btnBorder ? "2px solid #FFFFFF" : "2px solid #FFFFFF"};
  }

  @media screen and (max-width: 541px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.8rem;
    width: 100%;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.7rem;
    padding: 0.4rem 0.1rem;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.6rem;
  }
`;

//For Home Event Section
export const Button10 = styled.button`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: 135.94%;
  background-color: ${({ primary }) => (primary ? "transparent" : "none")};
  color: ${({ colLabel }) => (colLabel ? "#5F71AC" : "none")};
  border: ${({ btnBorder }) => (btnBorder ? "2px solid #5F71AC" : "none")};
  padding: ${({ btnPadding }) => (btnPadding ? "0.4rem 2.2rem" : "none")};
  font-size: ${({ btnFontSize }) => (btnFontSize ? "1.2rem" : "none")};
  border-radius: 100px;
  width: auto;
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#5F71AC" : "none")};
    color: ${({ colLabel }) => (colLabel ? "#FFFFFF" : "none")};
    border: ${({ btnBorder }) => (btnBorder ? "2px solid #5F71AC" : "none")};
  }

  @media screen and (max-width: 541px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 415px) {
    font-size: 1rem;
    padding: 0.2rem 2rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 321px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.1rem;
    width: 100%;
  }
  @media screen and (max-width: 281px) {
    font-size: 0.7rem;
  }
`;

export default GlobalStyle;
