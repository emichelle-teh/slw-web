import styled from 'styled-components';

export const CardSec = styled.a`
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  margin: 12px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
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
  height: 25rem;
  padding: 24px;
  align-items: left;
  background: linear-gradient(189.83deg, #9CB2FF -75.27%, #163194 72.64%);
  border-radius: 6px;
`;

export const CardIcon = styled.div`
  margin: 24px 0;
`;

export const CardHeadline = styled.h3`
  color: #FFD6D0;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 172.3%;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  margin-top: 7rem;
  margin-bottom: 0.2rem;
`;
export const CardDesc = styled.div`
  width: 90%;
  color: #FFFFFF;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.p`
  font-family: Nunito;
  font-weight: 500;
  font-size: 14px;
  height: 5rem;
  line-height: 19.03px;
  word-wrap: break-word;
`;

export const CardButton = styled.div`
  margin-top: 1rem;
`;