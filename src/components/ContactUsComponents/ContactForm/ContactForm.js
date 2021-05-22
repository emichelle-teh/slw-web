import React, {memo}from 'react';
import { Container, Button1 } from '../../../globalStyles';
import {
    ContactFormSec,
    FormHeadline,
    FormWrapper,
    ButtonHeadline,
    ButtonLink,
  } from './ContactForm.elements';

const ContactForm = ({ formHeadline, btnHeadline1, url1, buttonLabel1, btnHeadline2, url2, buttonLabel2}) => {
    return (
        <>
            <ContactFormSec>
                <Container>
                    <FormHeadline>{formHeadline}</FormHeadline>
                    <FormWrapper>
                        <ButtonHeadline>{btnHeadline1}</ButtonHeadline>
                        <ButtonLink href={url1}>
                            <Button1 primary={false} colLabel={false} btnBorder={false} btnPadding={false} fontSize={false}>
                            {buttonLabel1}
                            </Button1>
                        </ButtonLink>
                    </FormWrapper>
                    <FormWrapper>
                        <ButtonHeadline>{btnHeadline2}</ButtonHeadline>
                        <ButtonLink href={url2}>
                            <Button1 primary={true} colLabel={true} btnBorder={true} btnPadding={true} fontSize={true}>
                            {buttonLabel2}
                            </Button1>
                        </ButtonLink>
                    </FormWrapper>
                    
                </Container>
            </ContactFormSec>

        </>
    )
}

export default memo(ContactForm);
