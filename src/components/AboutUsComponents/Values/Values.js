import React, {memo, useState} from 'react';
import { Container } from '../../../globalStyles';
import {
    ValuesSec,
    ValuesHeader,
    ValuesHeadline,
    HeadlineUnderline,
    CardContainer,
    CardSec,
    CardInfo,
    CardIcon,
    DescriptionSec,
    WrapperDesc,
    CardHeadline,
    CardDesc,
    

} from './Values.elements';

const Values = ( {valuesTitle, valuesData} ) => {
    const [cards] = useState(valuesData);
    return (
        <>
            <ValuesSec>
                <Container>
                    <ValuesHeadline>{valuesTitle}</ValuesHeadline>
                    <ValuesHeader>
                        <HeadlineUnderline></HeadlineUnderline>
                    </ValuesHeader>
                    <CardContainer>
                    {cards.map((valueData) => {
                    const { id, imageUrl, imageName, cardTitle, cardDesc } = valueData;
                    return (
                        <CardSec key={id}>
                            <CardInfo>
                                    <CardIcon src={imageUrl} alt={imageName}/>
                                <DescriptionSec>
                                    <WrapperDesc>
                                        <CardHeadline>{cardTitle}</CardHeadline>
                                    </WrapperDesc>
                                    <WrapperDesc>
                                        <CardDesc>{cardDesc}</CardDesc>
                                    </WrapperDesc>
                                </DescriptionSec>
                            </CardInfo>
                        </CardSec>
                        );
                    })}
                    </CardContainer>
                </Container>
            </ValuesSec>
        </>
    )
}

export default memo(Values);
