import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button_2 } from '../../globalStyles';
import {
  CoverSec,
  CoverColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from './Cover.elements';

function Cover({
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
                  <Link to='/'>
                    <Button_2 primary={primary} colLabel={true} btnBorder={true} btnPadding={false} fontSize={true}>
                      {buttonLabel}
                    </Button_2>
                  </Link>
                </TextWrapper>
              </CoverColumn>
          </Container>
      </CoverSec>
    </>
  );
}

export default Cover;
