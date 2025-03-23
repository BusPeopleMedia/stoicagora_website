import { lazy } from "react";
import MissionContent from "../../content/MissionContent.json";
import Title from "antd/lib/typography/Title";
import { TextWrapper } from "../../components/Block/styles";
import { ContentSection } from "../../components/ContentBlock/styles";


const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const TestimonialCarousel = lazy(() => import("../../components/Carousel"))
const mock1 = require('../../assets/mock_1.png')
const mock3 = require('../../assets/mock_3.png')
const mock5 = require('../../assets/mock_5.png')
const mock6 = require('../../assets/mock_6.png')
const actionMock = require('../../assets/action_mock.png')

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
      <TestimonialCarousel />
      <ContentBlock
        direction="left"
        title={`A Daily Blueprint for a Stoic Life`}
        subtitle={"Peace and clarity shouldn’t be complicated. Agora gives you a simple, structured way to practice Stoicism in just 10 minutes a day. Read a quote, reflect, take action, and grow—without distractions or overwhelm."}
        content={MissionContent.text}
        icon={mock6}
        id="mission"
      />
      <ContentBlock
        direction="right"
        title={"Effortless Reflection, Meaningful Progress"}
        subtitle={"Most journaling apps leave you staring at a blank page. Agora guides you with a clear Stoic practice—read, act, reflect—all in a minimalist space designed for focus and consistency."}
        content={MissionContent.text}
        icon={mock5}
        id="prompt"
      />
      <ContentBlock
        direction="left"
        title={"Stoicism in Action"}
        subtitle={"Reflection is powerful, but action creates change. Every day, Agora gives you a simple Stoic act to practice—small, meaningful steps that build resilience, discipline, and inner peace."}
        content={MissionContent.text}
        icon={actionMock}
        // icon={mock3}
        id="community"
      />
      <ContentBlock
        direction="right"
        title={"A Community of Modern Stoics"}
        subtitle={"Stoicism isn’t just personal growth—it’s learning from others. With Agora, you’re never alone. Share insights, apply Stoic wisdom in real time, and grow alongside a like-minded community."}
        content={MissionContent.text}
        icon={mock3}
        id="testimonial"
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
