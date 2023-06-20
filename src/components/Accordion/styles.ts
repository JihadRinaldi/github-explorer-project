import styled, { css } from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
`;

export const AccordionItem = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const AccordionHeader = styled.div<{ isOpen: boolean }>`
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #eaeaea;
  }

  ${({ isOpen }) => isOpen
    && css`
      background-color: #eaeaea;
    `}

    & svg {
      transition: transform 0.3s ease;
      transform: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
    }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

export const StyledAccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

`;

export const Card = styled.div`
  border: 1px solid #ccc;
  height: 8rem;
  background-color: #e0e0e0;
  padding: 1rem;
  margin-bottom: 10px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 8px;
  align-items: center;
  justify-content: space-evenly;
`;

export const CardTitle = styled.h4`
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const StyledStarContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
`;
