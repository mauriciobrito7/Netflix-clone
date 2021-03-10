import React from "react";
import { Container, Input, Break, Button, Text } from "./optForm.styles";

const OptForm = ({ children }) => {
  return <Container>{children}</Container>;
};

export default OptForm;

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps}></Input>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
