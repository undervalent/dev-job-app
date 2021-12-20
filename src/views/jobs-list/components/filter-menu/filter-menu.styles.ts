import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 6px;
  min-height: 8rem;
  padding: 1.6rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
`;
