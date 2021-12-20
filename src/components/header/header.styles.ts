import styled from "styled-components";
import media from "styled-media-query";

import smallBackground from "../../assets/mobile/bg-pattern-header.svg";
import mediumBackground from "../../assets/tablet/bg-pattern-header.svg";
import largeBackground from "../../assets/desktop/bg-pattern-header.svg";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3.2rem 2.4rem;
  height: 13.6rem;
  background-image: url(${smallBackground});
  ${media.greaterThan("medium")`
  background-image: url(${mediumBackground});
  `}
  ${media.greaterThan("large")`
  background-image: url(${largeBackground});
  `}

  .header-container {
    display: flex;
    flex: 1;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 111rem;
  }
  
`;
