import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Button2 } from '../../globalStyles';
import CardPartner from '../CardPartner/CardPartner';
import { partnerLogo } from '../../pages/Home/Data';
import {
    PartnerSec,
    PartnerWrapper,
    PartnerHeadline,
    PartnerContainer,
    CarouselSec,
} from './Partner.elements';

const breakPoints = [
    { itemsToShow: 5 },
  ];

const Partner = ({
    headline, 
    buttonLabel
}) => {
    const [cardData] = useState(partnerLogo);
    return (
        <>
            <PartnerSec>
                <PartnerWrapper>
                    <PartnerHeadline>{headline}</PartnerHeadline>
                    <PartnerContainer>
                        <CarouselSec breakPoints={breakPoints}>
                        {cardData.map((cardData) => {
                            const { id, imageUrl, logoName  } = cardData;
                            return(
                                <CardPartner id={id} imageUrl={imageUrl} logoName={logoName}/>
                                );
                            })}   
                        </CarouselSec>
                    </PartnerContainer>
                    <Link to='/'>
                        <Button2 primary={true} colLabel={true} btnBorder={false} btnPadding={false} fontSize={true}>
                        {buttonLabel}
                        </Button2>
                    </Link>
                </PartnerWrapper>
            </PartnerSec>
        </>
    );
};

export default memo(Partner);
