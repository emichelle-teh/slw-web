import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import Card from '../Card/Card';
import { cardsData } from '../../pages/HomePage/Data';
import {
  ComSec,
  ComWrapper,
  ComHeading,
  ComSubHeading,
  ComContainer
} from './ComSection.elements';
//import { FaInstagram, FaYoutube, FaDiscord, FaSpotify } from 'react-icons/fa';

function ComSection() {
    const [cardData] = useState(cardsData);

    return (
        <>
            <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <ComSec>
                <ComWrapper>
                <ComHeading>Be a self love warrior</ComHeading>
                <ComSubHeading>Find self love warrior community in these platforms</ComSubHeading>
                <ComContainer>
                    <Card cards={cardData}/>
                </ComContainer>
                </ComWrapper>
            </ComSec>
            </IconContext.Provider>
        </>
    )
};

export default ComSection;
