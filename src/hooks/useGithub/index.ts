import { useMemo, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { IUserItem } from "interface/githubAPI";
import {
  getReposByUsername,
  findUsername,
} from "services/api";

export function useRepositories() {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [isGetRepoLoading, setIsGetRepoLoading] = useState(false);
  const [isUsersEmpty, setIsUserEmpty] = useState(false);

  const [t] = useTranslation();

  const searchUsername = useCallback(async (username: string) => {
    try {
      setIsSearchLoading(true);

      const findResult = await findUsername(username);
      if (findResult.items.length === 0) {
        setIsUserEmpty(true);
      }
      setUsers(findResult.items);
    } catch (err) {
      throw new Error(t("errors.internal_server_error"));
    } finally {
      setIsSearchLoading(false);
    }
  }, [t]);

  const getUserRepos = useCallback(async (username: string, userList: IUserItem[]) => {
    try {
      setIsGetRepoLoading(true);

      const hihi = await getReposByUsername(username);
      const selectedUser = userList.find(user => user.login === username);
      if (selectedUser) {
        const filteredUser = userList.filter(user => user.login !== username);

        setUsers([
          ...filteredUser,
          {
            ...selectedUser,
            repository: hihi,
          },
        ]);
      }
    } catch (err) {
      throw new Error(t("errors.internal_server_error"));
    } finally {
      setIsGetRepoLoading(false);
    }
  }, [t]);

  const payload = useMemo(() => ({
    users,
    isSearchLoading,
    isGetRepoLoading,
    isUsersEmpty,
    searchUsername,
    getUserRepos,
  }), [
    users,
    isUsersEmpty,
    isSearchLoading,
    isGetRepoLoading,
    isUsersEmpty,
    searchUsername,
    getUserRepos,
  ]);

  return payload;
}
