import styled from "styled-components";

export const Container = styled("section")`
  position: relative;
  padding: 1rem 0 3rem;
  width: 100%;
  margin: auto;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0 1rem;
  }
`;

export const Testimonial = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(234, 234, 234);
    border-radius: 1.25rem;
    padding: 2rem;

    @media only screen and (max-width: 640px) {
    &:not(:first-child) {
      display: none;
    }
  }
`;

export const Text = styled("p")`
  font-size: 20px;
  text-align: left;
  line-height: 1.8rem;
`;

export const Citation = styled("span")`
  font-size: 20px;
  text-align: left;
  line-height: 1.8rem;
`;

export const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

    @media only screen and (max-width: 640px) {
      grid-template-columns: repeat(1, 1fr);

    }
  }
`