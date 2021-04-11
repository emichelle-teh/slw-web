import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button_2 } from '../../globalStyles';
import { logo } from './Data';
import {
    PartnerSec,
    PartnerWrapper,
    PartnerHeadline,
    PartnerContainer,
} from './Partner.elements';

const Partner = ({headline, primary, buttonLabel}) => {
        
    return (
        <>
            <PartnerSec>
                <PartnerWrapper>
                    <PartnerHeadline>{headline}</PartnerHeadline>
                    <PartnerContainer>

                    </PartnerContainer>
                    <Button_2 primary={primary} colLabel={true} btnBorder={true} btnPadding={false} fontSize={true}>
                      {buttonLabel}
                    </Button_2>
                </PartnerWrapper>
            </PartnerSec>
        </>
    );
};

export default Partner;
