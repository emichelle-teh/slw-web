import React from 'react';
import { Link } from 'react-router-dom';
import { Button_1 } from '../../globalStyles';
import {
  CardSec,
  CardInfo,
  CardIcon,
  CardHeadline,
  CardDesc,
  CardText,
  CardButton
} from './CardCom.elements';

const CardCom = ({ cards }) => {
    return (
        <>
            {cards.map((cardData) => {
                const { id, link, cardTitle, cardTextDesc, buttonLabel } = cardData;
                return (
                    <CardSec href={link} key={id}>
                        <CardInfo>
                            <CardIcon></CardIcon>
                            <CardHeadline>{cardTitle}</CardHeadline>
                            <CardDesc>
                                <CardText>{cardTextDesc}</CardText>
                                <CardButton>
                                    <Link to='/'>
                                    <Button_1 primary={false} colLabel={false} btnBorder={false} btnPadding={false} fontSize={false}>
                                        {buttonLabel}
                                    </Button_1>
                                    </Link>
                                </CardButton>
                            </CardDesc>
                        </CardInfo>
                    </CardSec>
                );
            })}            
        </>
    );
};

export default CardCom;
