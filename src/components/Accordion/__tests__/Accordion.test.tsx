import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import Accordion from "../";

describe("Accordion", () => {
  const title = "Accordion Title";
  const avatarSrc = "avatar.jpg";
  const mockOnAccordionOpen = jest.fn();
  
  test("renders accordion with title and avatar", () => {
    const { getByText, getByAltText } = render(
      <Accordion
        title={title}
        avatar={avatarSrc}
        isLoading={false}
        onAccordionOpen={mockOnAccordionOpen}
      />
    );

    const titleElement = getByText(title);
    const avatarElement = getByAltText("Avatar");

    expect(titleElement).toBeInTheDocument();
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement.hasAttribute('src')).toBeTruthy();
  });

  test("calls onAccordionOpen when accordion is clicked", () => {
    const title = "Accordion Title";
    const onAccordionOpen = jest.fn();
    const { getByText } = render(
      <Accordion
        title={title}
        avatar=""
        isLoading={false}
        onAccordionOpen={onAccordionOpen}
      />
    );

    const accordionHeader = getByText(title);

    fireEvent.click(accordionHeader);

    expect(onAccordionOpen).toHaveBeenCalledWith(title);
  });

  test("snapshot test multiple repositories", async () => {
    const title = "Accordion Title";
    const repositories = [
      {
        id: 1,
        name: "Repo 1",
        stargazers_count: 10,
        description: "Repository 1",
      },
      {
        id: 2,
        name: "Repo 2",
        stargazers_count: 5,
        description: "Repository 2",
      },
    ];

    render(
      <Accordion
        title={title}
        avatar=""
        repositories={repositories}
        isLoading={false}
        onAccordionOpen={mockOnAccordionOpen}
      />      
    );
    const cardTitleList = await screen.findAllByTestId('card-title');
    expect(cardTitleList.map((cardTitle) => cardTitle.textContent)).toMatchInlineSnapshot(`
      Array [
        "Repo 1",
        "Repo 2",
      ]
    `);
  })
});
