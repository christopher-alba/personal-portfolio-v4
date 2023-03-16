import styled from "styled-components";

export const TechnologyWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Pill = styled("div")`
  flex-grow: 1;
  padding: 5px 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  background: ${({ theme }) => theme.colors.tertiarySub};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
  font-size: 0.8rem;
`;
