import axios from "axios";

import {
  IRepository,
  IUser,
} from "interface/githubAPI";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export async function getRepository(repositoryFullName: string) {
  const { data } = await api.get<IRepository>(`repos/${repositoryFullName}`);

  return data;
}

export async function findUsername(username: string) {
  const { data } = await api.get<IUser>("search/users", {
    params: {
      q: username,
      per_page: 5,
    },
  });

  return data;
}

export async function getReposByUsername(username: string) {
  const { data } = await api.get<IRepository[]>(`users/${username}/repos`, {
    params: {
      per_page: 30,
    },
  });

  return data;
}
