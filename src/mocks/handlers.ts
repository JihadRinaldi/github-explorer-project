import { rest } from 'msw'
import { MOCK_SEARCH_EMPTY, MOCK_SEARCH_JIHAD } from './data/MOCK_SEARCH_USER';
import { IUser } from 'interface/githubAPI';

export const handlers = [
  // Handles a POST /login request
  rest.get(
  'https://api.github.com/search/users?q=:name&per_page=5',
  (req, res, ctx) => {
    let resultData: IUser = MOCK_SEARCH_EMPTY;
    const searchParam = req.url.search;
    const urlParams = new URLSearchParams(searchParam);
    const username = urlParams.get('q');
    if (username?.toLocaleLowerCase() === 'jihad') {
      resultData = MOCK_SEARCH_JIHAD;
    }
    return res(ctx.json(resultData), ctx.status(200), ctx.delay(500));
  }),
]