import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button2 } from '../../../globalStyles';
import {
  CoverSec,
  CoverColumn,
  TextWrapper,
  Heading,
  Subtitle,
} from './Cover.elements';

function Cover({
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
                  <Heading>{headline}</Heading>
                  <Subtitle>{description}</Subtitle>
                  <Link to='/'>
                    <Button2 primary={true} colLabel={true} btnBorder={true} btnPadding={false} fontSize={true}>
                      {buttonLabel}
                    </Button2>
                  </Link>
                </TextWrapper>
              </CoverColumn>
          </Container>
      </CoverSec>
    </>
  );
}

export default memo(Cover);
