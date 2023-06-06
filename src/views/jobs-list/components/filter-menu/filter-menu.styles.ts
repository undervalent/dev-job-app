import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 6px;
  min-height: 8rem;
  padding: 0 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
  min-width: 100%;
  align-items: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  height: 100%;
`;
