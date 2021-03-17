import styled from 'styled-components';

export const ComSec = styled.div`
  padding: 160px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ef36a8;
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

export const ComHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;
export const ComSubHeading = styled.p`
  color: #fff;
  font-size: 24px;
  margin-bottom: 6px;
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

