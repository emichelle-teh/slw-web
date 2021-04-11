import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 60px 0;
  background: #FFDBB9;
`;

export const InfoRow = styled.div`
  display: flex;
`;

export const InfoColumn = styled.div`
  width: ${({ colWidth }) => (colWidth ? '70%' : '15%')};
  @media screen and (max-width: 768px) {
    display: inline-block;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const BtnCollumn = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  display: inline-flex;
  width: 50%;
`;

export const TextWrapper = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 10px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  display: flex;
  letter-spacing: 0.01em;
  color: #EF5D5D;
`;

export const InfoImg = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;