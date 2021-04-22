import styled from 'styled-components';

export const CoverSec = styled.div`
    position: relative;
    color: #fff;
    padding: 160px 0;
    background: #FAD5D1;
`;

export const CoverRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
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
    word-wrap: break-word;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 58px;
    line-height: 172.3%;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #091F6B;

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
    max-width: 540px;
    margin-bottom: 3rem;
    width: 90%;
    word-wrap: break-word;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 169.5%;
    letter-spacing: 0.02em;
    color: #DB303B;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        word-wrap: normal;
        width: 100%;
    }
`;

export const Description = styled.p`
    max-width: 540px;
    margin-bottom: 3rem;
    width: 90%;
    word-wrap: break-word;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 169.5%;
    letter-spacing: 0.02em;
    color: #DB303B;
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        word-wrap: normal;
        width: 100%;
    }
`;

export const ImgWrapper = styled.div`
    width: 600px;
    height: 400px;

    background: #FFFFFF;
    border-radius: 18px;
`;

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    height: auto; 
    width: auto; 
    max-width: 400px; 
    max-height: 400px;
    @media screen and (max-width: 768px) {
        max-width: 200px; 
        max-height: 200px;
        
    }
`;