import styled, { css } from "styled-components";
import media from "styled-media-query";

import { InputProps } from "./types";

export const StyledInput = styled.input<InputProps>`
  flex: 1;
  padding: 1rem;
  border: 0;
  border: 1px solid ${({ theme }) => theme.colors.background};

  ${({ hasError, theme }) => hasError
    && css`
      border: 2px solid ${theme.colors.error};
      border-right-width: 0;
    `};

  ${media.lessThan("medium")`
    flex: unset;
    border-right-width: 2px;
  `}
`;
