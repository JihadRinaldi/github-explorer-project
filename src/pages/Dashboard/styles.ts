import styled from "styled-components";
import media from "styled-media-query";

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.dark};
  max-width: 450px;
  line-height: 56px;
  margin-top: 1rem;
`;

export const Form = styled.form`
  margin-top: 1rem;
  width: 100%;
  display: flex;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: stretch;
  `}
`;

export const AddRepositoryInputError = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 8px;
`;

export const StyledAccordionContainer = styled.div`
  padding: 1rem 0;
`;

export const StyledNotUserFound = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;