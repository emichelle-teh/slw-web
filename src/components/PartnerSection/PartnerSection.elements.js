import styled from 'styled-components';

export const PartnerSec = styled.div`
  background: #fff;
  padding: 5rem 2rem;

  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-align: center;
  
  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;

export const Headline = styled.h1`
  color: #242424;
  font-size: 64px;
  margin-bottom: 24px;
`;

export const LogoContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
    }
`;
export const LogoImg = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;
export const BtnContainer = styled.div`

`;
export const PrevBtn= styled.button`
  color: var(--clr-primary-7);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;

  &hover {
    color: var(--clr-primary-5);
  }
`;

export const NextBtn= styled.button`
  color: var(--clr-primary-7);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;

  &hover {
    color: var(--clr-primary-5);
  }
`;