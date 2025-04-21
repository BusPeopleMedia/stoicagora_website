import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 1rem 0 3rem;
  width: 100%;
  margin: auto;
  max-width: 50rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0 1rem;
  }
`;

export const BackgroundContainer = styled('div')`
  background-color: #282828;
  border-radius: 5%;
`

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
    background-color: #282828;
    border-radius: 1.25rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const BottomContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 0rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const Title = styled("h3")`
  font-size: 38px;
  color: white;
  text-align: left;
  margin-right: 2rem;
  margin-left: 2rem;
`

export const MinTitle = styled("h4")`
  font-family: "Manrope Thin", sans-serif;
  font-size: 16px;
  text-align: left;
  line-height: 1.8rem;
  color: white;
  margin: auto;
  margin-bottom: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  font-weight: 100;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
