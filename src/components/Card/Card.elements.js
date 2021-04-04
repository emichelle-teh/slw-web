import styled from 'styled-components';

export const CardSec = styled.a`
  background: #fff;
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  margin: 12px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #000000;
`;

export const CardIcon = styled.div`
  margin: 24px 0;
`;

export const CardHeading = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;
export const CardDesc = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardText = styled.i`
  margin-bottom: 10px;
  width: 100%;
  word-wrap: break-word;
`;