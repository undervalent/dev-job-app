import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Listings = styled.div`
  display: grid;
  grid-row-gap: 4.9rem;
  margin-top: 5.7rem;
  grid-column-gap: 3rem;

  ${media.greaterThan("medium")`
    grid-template-columns: 1fr 1fr;
    margin-top: 7rem;
  `}

  ${media.greaterThan("large")`
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 10.5rem;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;
