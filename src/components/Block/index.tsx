import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: TFunction;
  block?: boolean
}

const Block = ({ title, content, block, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{content}</Content>
        {block && <Content>
          Please refer to our Privacy page to understand our data policies.
        </Content>}
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
