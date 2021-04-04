import React from 'react';
import {
  CardSec,
  CardInfo,
  CardIcon,
  CardHeading,
  CardDesc,
  CardText
} from './Card.elements';

const Card = ({ cards }) => {
    return (
        <>
            {cards.map((cardData) => {
                const { id, link, cardTitle, cardTextDesc } = cardData;
                return (
                    <CardSec href={link} key={id}>
                        <CardInfo>
                            <CardIcon></CardIcon>
                            <CardHeading>{cardTitle}</CardHeading>
                            <CardDesc>
                                <CardText>{cardTextDesc}</CardText>
                            </CardDesc>
                        </CardInfo>
                    </CardSec>
                );
            })}            
        </>
    );
};

export default Card;
