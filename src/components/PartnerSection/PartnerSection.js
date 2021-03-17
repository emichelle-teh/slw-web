import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { logo } from './Data';
import {
    PartnerSec,
    Headline,
    LogoContainer,
    LogoImg,
    BtnContainer,
    PrevBtn, 
    NextBtn
} from './PartnerSection.elements';

const PartnerSection = () => {
        const [index, setIndex] = useState(0);
        const { logoName, image } = logo[index];
        const checkNumber = (number) => {
            if (number > logo.length - 1) {
            return 0;
            }
            if (number < 0) {
            return logo.length - 1;
            }
            return number;
        };
        const nextLogo = () => {
            setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
            });
        };
        const prevLogo = () => {
            setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
            });
        };
    return (
        <>
            <PartnerSec>
                <Headline>We’ve collaborated with</Headline>
                <LogoContainer>
                    <LogoImg src={image} alt={logoName} />
                </LogoContainer>
                <BtnContainer>
                    <PrevBtn onClick={prevLogo}>
                        <FaChevronLeft />
                    </PrevBtn>
                    <NextBtn onClick={nextLogo}>
                        <FaChevronRight />
                    </NextBtn>
                </BtnContainer>
            </PartnerSec>
        </>
    );
};

export default PartnerSection;
