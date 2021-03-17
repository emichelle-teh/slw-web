import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    BtnCollumn,
    Heading,
    Subtitle,
} from './InfoSection.elements';

function InfoSection({
    primary,
    headline,
    subHeadline,
    buttonLabel1,
    buttonLabel2,
    imgStart,
}) {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <Heading>{headline}</Heading>
                                <Subtitle>{subHeadline}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <BtnCollumn>
                            <Link to='/sign-up'>
                                <Button big={false} fontBig primary={primary}>
                                    {buttonLabel1}
                                </Button>
                            </Link>
                            </BtnCollumn>
                            <BtnCollumn>
                            <Link to='/sign-up'>
                                <Button big fontBig primary={primary} transparent colLabel={true}>
                                    {buttonLabel2}
                                </Button>
                            </Link>
                            </BtnCollumn>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
}

export default InfoSection;
