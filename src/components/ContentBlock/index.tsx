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
  BottomContentWrapper,
  MinTitle,
} from "./styles";
import { useEffect, useState } from "react";

const ContentBlock = ({
  icon,
  title,
  subtitle,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const [alt, setAlt] = useState('')

  useEffect(() => {
    if (title === "Start your free trial today.") {
      setAlt("The happiness of your life depends on the quality of your thoughts: a quote by Marcus Aurelius.")
    } else if (title === "No one grows in isolation.") {
      setAlt("This is the first app that has gotten me to practice journaling on a regular basis.")
    } else if (title === "Gain insight & support from others.") {
      setAlt("Screenshot of app with Marcus Aurelius quote and user journals.")
    } else if (title === "Meditate on a daily quote with guided prompts.") {
      setAlt("Screenshot of app with a prompt.")
    } else if (title === "The tools you need to grow resilient.") {
      setAlt("App user statistics for thoughts submitted and other data.")
    }
  }, [title])


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
                <MinTitle>{t(subtitle)}</MinTitle>
                {id === 'app' && <a
                  href="https://apps.apple.com/app/apple-store/id6450792203?pt=126019604&ct=StoicAgora&mt=8"
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
            <BottomContentWrapper>
              <Content style={{ display: 'flex', justifyContent: 'center' }}>
                <SvgIcon src={icon} alt={alt} width="65%" height="100%" />
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
            </BottomContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
      {/* </BackgroundContainer> */}
    </ContentSection>

  );
};

export default withTranslation()(ContentBlock);
