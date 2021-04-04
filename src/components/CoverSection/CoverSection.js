import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  CoverSec,
  CoverColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from './CoverSection.elements';

function CoverSection({
  primary,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
}) {
  return (
    <>
      <CoverSec>
        <Container>
            <CoverColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </CoverColumn>
        </Container>
      </CoverSec>
    </>
  );
}

export default CoverSection;
