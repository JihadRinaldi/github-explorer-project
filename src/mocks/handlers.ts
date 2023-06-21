import { rest } from 'msw'
import { MOCK_SEARCH_EMPTY, MOCK_SEARCH_JIHAD } from './data/MOCK_SEARCH_USER';
import { IUser } from 'interface/githubAPI';

const hehe = {
  "total_count": 1816,
  "incomplete_results": false,
  "items": [
    {
      "login": "Jihad",
      "id": 642153,
      "node_id": "MDQ6VXNlcjY0MjE1Mw==",
      "avatar_url": "https://avatars.githubusercontent.com/u/642153?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Jihad",
      "html_url": "https://github.com/Jihad",
      "followers_url": "https://api.github.com/users/Jihad/followers",
      "following_url": "https://api.github.com/users/Jihad/following{/other_user}",
      "gists_url": "https://api.github.com/users/Jihad/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Jihad/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Jihad/subscriptions",
      "organizations_url": "https://api.github.com/users/Jihad/orgs",
      "repos_url": "https://api.github.com/users/Jihad/repos",
      "events_url": "https://api.github.com/users/Jihad/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Jihad/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    },
    {
      "login": "jihadul4kbar",
      "id": 32048620,
      "node_id": "MDQ6VXNlcjMyMDQ4NjIw",
      "avatar_url": "https://avatars.githubusercontent.com/u/32048620?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jihadul4kbar",
      "html_url": "https://github.com/jihadul4kbar",
      "followers_url": "https://api.github.com/users/jihadul4kbar/followers",
      "following_url": "https://api.github.com/users/jihadul4kbar/following{/other_user}",
      "gists_url": "https://api.github.com/users/jihadul4kbar/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jihadul4kbar/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jihadul4kbar/subscriptions",
      "organizations_url": "https://api.github.com/users/jihadul4kbar/orgs",
      "repos_url": "https://api.github.com/users/jihadul4kbar/repos",
      "events_url": "https://api.github.com/users/jihadul4kbar/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jihadul4kbar/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    },
    {
      "login": "byxorna",
      "id": 130194,
      "node_id": "MDQ6VXNlcjEzMDE5NA==",
      "avatar_url": "https://avatars.githubusercontent.com/u/130194?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/byxorna",
      "html_url": "https://github.com/byxorna",
      "followers_url": "https://api.github.com/users/byxorna/followers",
      "following_url": "https://api.github.com/users/byxorna/following{/other_user}",
      "gists_url": "https://api.github.com/users/byxorna/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/byxorna/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/byxorna/subscriptions",
      "organizations_url": "https://api.github.com/users/byxorna/orgs",
      "repos_url": "https://api.github.com/users/byxorna/repos",
      "events_url": "https://api.github.com/users/byxorna/events{/privacy}",
      "received_events_url": "https://api.github.com/users/byxorna/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    },
    {
      "login": "jbenastey",
      "id": 38847047,
      "node_id": "MDQ6VXNlcjM4ODQ3MDQ3",
      "avatar_url": "https://avatars.githubusercontent.com/u/38847047?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jbenastey",
      "html_url": "https://github.com/jbenastey",
      "followers_url": "https://api.github.com/users/jbenastey/followers",
      "following_url": "https://api.github.com/users/jbenastey/following{/other_user}",
      "gists_url": "https://api.github.com/users/jbenastey/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jbenastey/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jbenastey/subscriptions",
      "organizations_url": "https://api.github.com/users/jbenastey/orgs",
      "repos_url": "https://api.github.com/users/jbenastey/repos",
      "events_url": "https://api.github.com/users/jbenastey/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jbenastey/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    },
    {
      "login": "dewey92",
      "id": 5234842,
      "node_id": "MDQ6VXNlcjUyMzQ4NDI=",
      "avatar_url": "https://avatars.githubusercontent.com/u/5234842?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/dewey92",
      "html_url": "https://github.com/dewey92",
      "followers_url": "https://api.github.com/users/dewey92/followers",
      "following_url": "https://api.github.com/users/dewey92/following{/other_user}",
      "gists_url": "https://api.github.com/users/dewey92/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/dewey92/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/dewey92/subscriptions",
      "organizations_url": "https://api.github.com/users/dewey92/orgs",
      "repos_url": "https://api.github.com/users/dewey92/repos",
      "events_url": "https://api.github.com/users/dewey92/events{/privacy}",
      "received_events_url": "https://api.github.com/users/dewey92/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1
    }
  ]
};

export const handlers = []