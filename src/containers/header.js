import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;
