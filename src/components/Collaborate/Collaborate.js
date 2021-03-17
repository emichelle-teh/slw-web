import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  CollaborateSec,
  Heading,
  Subtitle,
  CollaborateColumn,
  CollaborateRow
} from './Collaborate.elements';


function Collaborate({
    primary,
    headlineText,
    textDesc,
    headline,
    description1,
    description2,
    description3,
    buttonLabel
}) {
    return (
        <>
            <CollaborateSec>
                <Container>
                    <CollaborateRow>
                        <Heading headlineText={headlineText}>{headline}</Heading>
                    </CollaborateRow>    
                    <CollaborateColumn>
                            <Subtitle textDesc={textDesc}>{description1}</Subtitle>
                            <Subtitle textDesc={textDesc}>{description2}</Subtitle>
                            <Subtitle textDesc={textDesc}>{description3}</Subtitle>
                    </CollaborateColumn>
                    <CollaborateRow>
                        <Link to='/collaborate'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </CollaborateRow>
                </Container>
            </CollaborateSec>
   
        </>
    )
}

export default Collaborate;
