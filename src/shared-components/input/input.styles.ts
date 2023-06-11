import styled from "styled-components";
import * as Form from "@radix-ui/react-form";

export const Input = styled.input`
  all: unset;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  font-size: 1.5rem;
  color: black;
  caret-color: ${({ theme }) => theme.colors.violet};
  background-color: trasnparent;
  height: 2.4rem;
  line-height: 1;
  &::selection {
    color: ${({ theme }) => theme.text};
  }
  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
