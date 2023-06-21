import React from 'react'
import { render, screen } from "@testing-library/react";
import App from 'App';


describe('Render App',  () => {
  test('expect github explorer header and title is display', async () => {
    render(
      <App />
    );
    const projectTitle = await screen.findByTestId(/dashboard-title/i);
    const headerLogo = await screen.findByTestId(/header-logo/i);
    expect(projectTitle).toBeInTheDocument();
    expect(projectTitle.textContent).toEqual("Explore GitHub");
    expect(headerLogo).toBeInTheDocument();
    expect(headerLogo.hasAttribute('src')).toBeTruthy();
    expect(headerLogo.hasAttribute('alt')).toBeTruthy();
  });
});
