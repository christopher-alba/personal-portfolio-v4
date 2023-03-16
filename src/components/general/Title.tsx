import React, { FC } from "react";
import styled from "styled-components";

const NumberSpan = styled("span")`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
  margin-right:10px;
`;

const TextSpan = styled("span")`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
`;

const Title: FC<{
  text: string;
  number: number;
}> = ({ text, number }) => {
  return (
    <div style={{marginBottom: "50px"}}>
      <NumberSpan>{number}.</NumberSpan>
      <TextSpan>{text}</TextSpan>
    </div>
  );
};

export default Title;