import React, {memo} from 'react';
import {
    CardSec,
    CardImage,
} from './CardPartner.elements';

const CardPartner = ({ id, imageUrl, logoName }) => {
    return (
        <CardSec key={id}>
            <CardImage  src={imageUrl} alt={logoName}>
            </CardImage>
        </CardSec> 
    )
}

export default memo(CardPartner);
