import React, { useState } from 'react';
import CardProg from '../CardProg/CardProg';
import { cardsProgData } from '../../pages/HomePage/Data';
import {
    ProgSec,
    ProgWrapper,
    ProgHeadline,
    ProgSubtitle,
    ProgContainer
  } from './Programs.elements';

function Programs({headline, subtitle}) {
    const [cardData] = useState(cardsProgData);
    return (
        <>
            <ProgSec>
                <ProgWrapper>
                <ProgHeadline>{headline}</ProgHeadline>
                <ProgSubtitle>{subtitle}</ProgSubtitle>
                <ProgContainer>
                    <CardProg cards={cardData}/>
                </ProgContainer>
                </ProgWrapper>
            </ProgSec>
        </>
    )
}

export default Programs
