import { lazy } from "react";
import MissionContent from "../../content/MissionContent.json";
import Title from "antd/lib/typography/Title";
import { TextWrapper } from "../../components/Block/styles";
import { ContentSection } from "../../components/ContentBlock/styles";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const mock1 = require('../../assets/mock_1.png')
const mock2 = require('../../assets/mock_2.png')
const mock3 = require('../../assets/mock_3.png')
const mock5 = require('../../assets/mock_5.png')
const mock6 = require('../../assets/mock_6.png')

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={"Start your free trial today."}
        subtitle={"Stoicism in 10 minutes a day."}
        content={MissionContent.text}
        icon={mock1}
        id="app"
      />
      <ContentBlock
        direction="left"
        title={"No one grows in isolation."}
        subtitle={"Joining a community of people cultivating a Stoic mindset."}
        content={MissionContent.text}
        icon={mock2}
        id="testimonial"
      />
      <ContentBlock
        direction="right"
        title={"Grow with the community."}
        subtitle={"Gain insight & support from others."}
        content={MissionContent.text}
        icon={mock3}
        id="community"
      />
      <ContentBlock
        direction="left"
        title={"Journal with purpose."}
        subtitle={"Meditate on a daily quote with guided prompts."}
        content={MissionContent.text}
        icon={mock5}
        id="prompt"
      />
      <ContentBlock
        direction="right"
        title={`A minimalist blueprint for a Stoic life.`}
        subtitle={"The tools you need to grow resilient."}
        content={MissionContent.text}
        icon={mock6}
        id="mission"
      />
      <ContentSection>
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{ textAlign: 'center' }}>Join the only Stoic community.</Title>
            <TextWrapper>
              <a
                href="https://apps.apple.com/app/apple-store/id6450792203?pt=126019604&ct=StoicAgora&mt=8"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <img src="https://cdn.prod.website-files.com/5df252114bb8c8dafbed787d/645f72ed7dfa8db5bacd3e81_Apple%20Store%20Badge.webp" loading="eager" width="167" alt="Download on the App Store button." />
              </a>
            </TextWrapper>
          </div>

        </Container>
      </ContentSection>

    </Container>
  );
};

export default Home;
