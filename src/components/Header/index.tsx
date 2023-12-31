import React, { PropsWithChildren } from "react";

import logo from "assets/logo.svg";

import { Container } from "./styles";

export function Header({ children }: PropsWithChildren<unknown>) {
  return (
    <Container>
      <img
        data-testid="header-logo"
        src={logo}
        alt="GitHub Explorer"
        aria-label="GitHub Explorer"
      />
      {children}
    </Container>
  );
}

