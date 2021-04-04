import styled from 'styled-components';
import coverImg from '../../images/img-home.jpg';

export const CoverSec = styled.div`
  color: #fff;
  padding: 160px 0;
  /* background: url(${coverImg}) center center/cover no-repeat; */
  background-color: #ef36a8;
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); */
  object-fit: contain;
`;

export const CoverColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
  word-wrap: break-word;
  font-size: 60px;
  line-height: 100%;
  width: 75%;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};

  @media screen and (max-width: 860px) {
    font-size: 50px;
    word-wrap: normal;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    word-wrap: normal;
    width: 100%;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  width: 75%;
  word-wrap: break-word;
  font-size: 24px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#fff' : '#1c2237')};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    word-wrap: normal;
    width: 100%;
  }
`;
