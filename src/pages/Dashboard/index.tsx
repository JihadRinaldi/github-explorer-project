import React, { useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { useRepositories } from "hooks/useGithub";
import { addRepositorySchema } from "schemas/addRepositorySchema";
import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { Input } from "components/Input";
import Accordion from "components/Accordion";

import {
  Form, Title, AddRepositoryInputError, StyledAccordionContainer,
} from "./styles";
import { RepositoryFormValues } from "./types";

export function Dashboard() {
  const {
    errors,
    setError,
    register,
    formState,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addRepositorySchema),
  });

  const {
    isSearchLoading,
    isGetRepoLoading,
    users,
    searchUsername,
    getUserRepos,
  } = useRepositories();

  const [t] = useTranslation();

  const onSubmit: SubmitHandler<RepositoryFormValues> = async (
    data,
  ) => {
    const { repositoryName } = data;

    try {
      await searchUsername(repositoryName);
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = String(error);
      }

      setError("repositoryName", {
        type: "manual",
        message,
      });
    }
  };

  const { isDirty, isValid } = formState;
  const { repositoryName: repositoryNameError } = errors;

  const hasError = Boolean(repositoryNameError?.message) && !isValid && isDirty;

  const sortedUser = useMemo(() => users.sort((a, b) => {
    if (a.login > b.login) {
      return 1;
    }
    if (b.login > a.login) {
      return -1;
    }
    return 0;
  }), [users]);

  const onAccordionOpen = async (username: string) => {
    try {
      await getUserRepos(username, users);
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = String(error);
      }

      setError("repositoryName", {
        type: "manual",
        message,
      });
    }
  };

  return (
    <Layout>
      <Title data-testid="dashboard-title">{t("dashboard.title")}</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="repositoryName"
          ref={register}
          type="text"
          name="repositoryName"
          hasError={hasError}
          aria-label="Repository Name"
          placeholder={t("dashboard.repository_name_placeholder")}
        />

        <Button
          type="submit"
          isLoading={isSearchLoading}
        >
          {t("buttons.search")}
        </Button>
      </Form>

      {repositoryNameError && (
        <AddRepositoryInputError>
          {repositoryNameError.message}
        </AddRepositoryInputError>
      )}

      <StyledAccordionContainer>
        {sortedUser?.map(user => (
          <Accordion
            key={user.login}
            avatar={user.avatar_url}
            isLoading={isGetRepoLoading}
            onAccordionOpen={onAccordionOpen}
            repositories={user?.repository}
            title={user.login}
          />
        ))}
      </StyledAccordionContainer>

    </Layout>
  );
}

