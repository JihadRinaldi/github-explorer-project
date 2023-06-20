import React, { useCallback, useState } from "react";
import { PulseLoader } from "react-spinners";

import i18n from "translations/i18n";
import { colors } from "styles/theme/colors";
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
    if (isLoading) {
      return <PulseLoader color={colors.dark} size={10} />;
    }
    if (repositories && repositories?.length) {
      return (
        <>
          {
            repositories.map((repository) => (
              <Card key={repository?.id}>
                <CardTitleContainer>
                  <CardTitle>{repository.name}</CardTitle>
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
    return (
      <div>
        {i18n.t("message.empty_repository")}
      </div>
    );
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
          <AccordionTitle>{title}</AccordionTitle>
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
