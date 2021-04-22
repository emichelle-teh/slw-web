import React, {memo}from 'react';
import { Container } from '../../globalStyles';
import {
  CoverSec,
  CoverRow,
  CoverColumn,
  TextWrapper,
  Heading,
  Subtitle,
  Description,
  ImgWrapper,
  Img,
} from './Cover.elements';

function Cover({
  headline,
  subtitle,
  description,
  imgUrl,
  alt,
  width,
  height,
}) {
  return (
    <>
      <CoverSec>
          <Container>
              <CoverRow>
                <CoverColumn>
                    <TextWrapper>
                    <Heading>{headline}</Heading>
                    <Subtitle>{subtitle}</Subtitle>
                    <Description>{description}</Description>
                    </TextWrapper>
                </CoverColumn>
                <CoverColumn>
                        <ImgWrapper>
                            <Img src={imgUrl} alt={alt} width={width} height={height}/>
                        </ImgWrapper>
                </CoverColumn>
              </CoverRow>
          </Container>
      </CoverSec>
    </>
  );
}

export default memo(Cover);