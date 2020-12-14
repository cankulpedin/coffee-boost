import React from "react";
import styled from "styled-components";

import { Navbar } from "react-bootstrap";

const StyledDiv = styled.div`
  margin-left: 4px;
`;

export const App = (): JSX.Element => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">My Brand</Navbar.Brand>
    </Navbar>
    <StyledDiv>Welcome to React App</StyledDiv>
  </div>
);
