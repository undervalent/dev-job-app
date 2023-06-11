import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  border-radius: 6px;
  min-height: 8rem;
  padding: 0 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const ButtonContainer = styled.div`
  max-width: 4.8rem;
`;
