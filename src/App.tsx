import React from "react";
/* import styled from "styled-components"; */
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar, Button } from "react-bootstrap";

import { Routes } from "./routes/Routes";

export const App = (): JSX.Element => (
  <div>
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My Brand</Navbar.Brand>
        <Button>Deneme</Button>
      </Navbar>
      <Routes />
    </Router>
  </div>
);
