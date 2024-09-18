import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  StyledRow,
  Title,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {

  return (
    <ContentSection>
      {/* <BackgroundContainer> */}
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="center"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <ContentWrapper>
              <Content style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Title>{t(title)}</Title>
                {id === 'app' && <a
                  href="https://apps.apple.com/no/app/stoic-community-with-agora/id6450792203"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <img src="https://cdn.prod.website-files.com/5df252114bb8c8dafbed787d/645f72ed7dfa8db5bacd3e81_Apple%20Store%20Badge.webp" loading="eager" width="167" alt="Download on the App Store button." />
                </a>}
              </Content>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <Content style={{ display: 'flex', justifyContent: 'center' }}>
                <SvgIcon src={icon} width="70%" height="100%" />
                {/* <img src={mock} loading="eager" width="60%" height={"100%"} alt="Download on the App Store button." /> */}
              </Content>
              {/* {direction === "right" ? (
                  <ButtonWrapper>
                  {typeof button === "object" &&
                  button.map(
                    (
                      item: {
                        color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                          key={id}
                          color={item.color}
                          onClick={() => scrollTo("about")}
                          >
                          {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                    </ButtonWrapper>
                  ) : (
                    <ServiceWrapper>
                    <Row justify="space-between">
                    {typeof section === "object" &&
                    section.map(
                      (
                        item: {
                          title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                            <SvgIcon
                            src={item.icon}
                            width="60px"
                            height="60px"
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                      </Row>
                      </ServiceWrapper>
                    )} */}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
      {/* </BackgroundContainer> */}
    </ContentSection>

  );
};

export default withTranslation()(ContentBlock);
