import React, { useState } from 'react';
import CardCom from '../CardCom/CardCom';
import { cardsComData } from '../../pages/HomePage/Data';
import {
  ComSec,
  ComWrapper,
  ComHeadline,
  ComContainer
} from './Community.elements';
//import { FaInstagram, FaYoutube, FaDiscord, FaSpotify } from 'react-icons/fa';

function Community({headline}) {
    const [cardData] = useState(cardsComData);

    return (
        <>
            <ComSec>
                <ComWrapper>
                <ComHeadline>{headline}</ComHeadline>
                <ComContainer>
                    <CardCom cards={cardData}/>
                </ComContainer>
                </ComWrapper>
            </ComSec>
        </>
    )
};

export default Community;
