import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { rest, server } from 'mocks/server';
import { MOCK_SEARCH_EMPTY } from 'mocks/data/MOCK_SEARCH_USER';
import App from 'App';


describe('Render User',  () => {
  test('expect github explorer display empty data', async() => {
    server.use(
      rest.get(
        'https://api.github.com/search/users',
        (_, res, ctx) => {
          return res(ctx.json(MOCK_SEARCH_EMPTY), ctx.status(200), ctx.delay(500));
        })
    )
    render(
      <App />
    );
    const inputUsername = await screen.findByTestId(/input-username/i);
    const buttonSearch = await screen.findByTestId(/button-search/i);
    expect(inputUsername).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
    userEvent.type(inputUsername, 'no username');
    userEvent.click(buttonSearch);
    const messageEmptyUser = await screen.findByTestId(/message-empty-user/i);
    expect(messageEmptyUser).toBeInTheDocument();
    expect(messageEmptyUser.textContent).toEqual("No user found, type another username");
  });
});
