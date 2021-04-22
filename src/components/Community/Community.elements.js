import styled from 'styled-components';

export const ComSec = styled.div`
  padding: 0px 0px 160px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ComWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ComHeadline = styled.h1`
  color: #091F6B;
  font-family: Nunito;
  font-style: normal;
  font-weight: 900;
  font-size: 58px;
  line-height: 129.3%;
  font-size: 3rem;
  margin-bottom: 3rem;
`;
export const ComContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

