import React, {memo} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button3 } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    BtnCollumn,
    Heading,
    InfoImg,
} from './Infrormation.elements';

function Infrormation({
    headline,
    buttonLabel1,
    buttonLabel2,
    imageUrl,
    imageName,
}) {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn colWidth={false}>
                            <InfoImg src={imageUrl} alt={imageName} />
                        </InfoColumn>
                        <InfoColumn colWidth={true}>
                            <TextWrapper>
                                <Heading>{headline}</Heading>
                            </TextWrapper>
                            <BtnCollumn>
                            <Link to='/contact-us'>
                                <Button3 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                                    {buttonLabel1}
                                </Button3>
                            </Link>
                            </BtnCollumn>
                            <BtnCollumn>
                            <Link to='/newsletter'>
                                <Button3 primary={false} colLabel={false} btnBorder={false} btnPadding={false} fontSize={false}>
                                    {buttonLabel2}
                                </Button3>
                            </Link>
                            </BtnCollumn>
                        </InfoColumn>
                        <InfoColumn colWidth={false}>
                            <InfoImg src={imageUrl} alt={imageName} />
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default memo(Infrormation);
