import React, { useCallback, useState } from "react";

import i18n from "translations/i18n";
import star from "assets/star.svg";
import { IRepository } from "interface/githubAPI";

import {
  AccordionContainer,
  StyledAccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTitle,
  Avatar,
  Card,
  CardDescription,
  CardTitle,
  CardTitleContainer,
  StyledStarContainer,
} from "./styles";

interface AccordionProps {
  title: string;
  repositories?: IRepository[] | undefined;
  avatar: string;
  onAccordionOpen: (username: string) => void;
  isLoading: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  repositories,
  avatar,
  onAccordionOpen,
  isLoading = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const AccordionContent = useCallback(() => {
    if (repositories && repositories.length === 0) {
      return (
        <>
          {i18n.t("message.empty_repository")}
        </>
      )
    }
    if (repositories && repositories.length) {
      return (
        <>
          {
            repositories.map((repository) => (
              <Card key={repository?.id}>
                <CardTitleContainer>
                  <CardTitle data-testid="card-title">{repository.name}</CardTitle>
                  <StyledStarContainer>
                    {repository?.stargazers_count}
                    <img
                      alt="star"
                      src={star}
                    />
                  </StyledStarContainer>
                </CardTitleContainer>
                <CardDescription>{repository.description}</CardDescription>
              </Card>
            ))
          }
        </>
      );
    }
    return null;
  }, [isLoading, repositories]);

  const onClickAccordion = () => {
    if (!isOpen) {
      onAccordionOpen(title);
    }
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionItem>
        <AccordionHeader isOpen={isOpen} onClick={onClickAccordion}>
          <Avatar src={avatar} alt="Avatar" />
          <AccordionTitle data-testid="accordion-title">{title}</AccordionTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8l-5 5-5-5" />
          </svg>
        </AccordionHeader>
        <StyledAccordionContent isOpen={isOpen}>
          <AccordionContent />
        </StyledAccordionContent>
      </AccordionItem>
    </AccordionContainer>
  );
};

export default Accordion;
