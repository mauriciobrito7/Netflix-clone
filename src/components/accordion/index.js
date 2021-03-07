import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./accordion.styles";

const ToggleContext = createContext();

function Accordion({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}
export default Accordion;

Accordion.Title = function AccordionTitle({ children }) {
  return <Title>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children }) {
  return <Frame>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body className={toggleShow ? "open" : "closed"}>
      <span>{children}</span>
    </Body>
  );
};
