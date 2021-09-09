import React, { memo } from "react";
import { Container, Button5 } from "../../../globalStyles";
import {
  BaseSection,
  Wrapper,
  Headline,
  Row,
  Column,
  ButtonLink,
} from "./Infrormation.elements";

function Infrormation({ headline, buttonLabel1, buttonLabel2 }) {
  return (
    <>
      <BaseSection>
        <Container>
          <Wrapper>
            <Headline>{headline}</Headline>
          </Wrapper>
          <Row>
            <Column colPosition={true}>
              <ButtonLink smooth to="/contact-us#">
                <Button5
                  primary={true}
                  colLabel={true}
                  btnBorder={true}
                  btnPadding={true}
                  btnFontSize={true}
                >
                  {buttonLabel1}
                </Button5>
              </ButtonLink>
            </Column>
            <Column colPosition={false}>
              <ButtonLink smooth to="/newsletter#">
                <Button5
                  primary={false}
                  colLabel={false}
                  btnBorder={false}
                  btnPadding={false}
                  btnFontSize={false}
                >
                  {buttonLabel2}
                </Button5>
              </ButtonLink>
            </Column>
          </Row>
        </Container>
      </BaseSection>
    </>
  );
}

export default memo(Infrormation);
