import styled from "styled-components";
export const ButtonPrimary = styled("button")`
  position: relative;
  padding: 10px 40px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  transition: 300ms;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ButtonSecondary = styled("button")`
  padding: 10px 40px;
  margin-top: 20px;
  background: transparent;
  transition: 300ms;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonTheme = styled("button")`
  padding: 10px 40px;
  white-space: nowrap;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.tertiaryTransparent};
  transition: 300ms;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryTransparent};
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ButtonPlain = styled("button")`
  background: none;
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
