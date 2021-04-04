import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: #004aad;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  display: flex;
  max-width: 50%;
  flex-basis: 50%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: inline-block;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const BtnCollumn = styled.div`
    padding: 10px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 24px;
  line-height: 24px;
  font-style: italic;
`;
