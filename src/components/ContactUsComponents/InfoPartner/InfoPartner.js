import React, {memo}from 'react';
import { Container, Button1 } from '../../../globalStyles';
import {
    InfoPartnerSec,
    Headline,
    Paragraph,
    InfoWrapper,
    ButtonHeadline,
    ButtonLink,
  } from './InfoPartner.elements';

const InfoPartner = ({ headline, colParaf1, paragraph1, colParaf2, paragraph2, btnHeadline, url, buttonLabel}) => {
    return (
        <>
            <InfoPartnerSec>
                <Container>
                    <Headline>{headline}</Headline>
                    <Paragraph fontWeight={colParaf1}>{paragraph1}</Paragraph>
                    <Paragraph fontWeight={colParaf2}>{paragraph2}</Paragraph>
                    <InfoWrapper>
                            <ButtonHeadline>{btnHeadline}</ButtonHeadline>
                            <ButtonLink href={url}>
                                <Button1 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                                {buttonLabel}
                                </Button1>
                            </ButtonLink>
                    </InfoWrapper>
                </Container>
            </InfoPartnerSec>
        </>
    )
};

export default memo(InfoPartner);
