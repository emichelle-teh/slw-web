import styled from 'styled-components';

export const CollaborateSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: #004aad;
  text-align: center;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-top: 24px;
  line-height: 1.1;
  font-weight: 600;
  font-size: 60px;
  line-height: 100%;
  color: ${({ headlineText }) => (headlineText ? '#fff' : '#1c2237')};

  @media screen and (max-width: 860px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  word-wrap: break-word;
  width: 85%;
  text-align: left;
  font-size: 20px;
  line-height: 24px;
  color: ${({ textDesc }) => (textDesc ? '#fff' : '#1c2237')};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
    word-wrap: normal;
    width: 100%;
  }
`;

export const CollaborateRow = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const CollaborateColumn = styled.div`
  float: right;
  margin: 75px 0px;
  @media screen and (max-width: 768px) {
    margin: 50px 0px;
    padding-right: 25px;
  }
`;