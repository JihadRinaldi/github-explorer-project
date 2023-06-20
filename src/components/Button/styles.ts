import styled, { css } from "styled-components";
import media from "styled-media-query";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    width: 210px;
    padding: 1rem;
    background: ${theme.colors.green};
    border: 0;
    color: ${theme.colors.white};
    font-weight: bold;
    transition: background-color 0.2s;

    ${media.lessThan("medium")`
      width: 100%;
    `}
  `}
`;
