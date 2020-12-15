import React from "react";
/* import styled from "styled-components"; */
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "./routes/Routes";
import { NavigationBar } from "./components/NavigationBar";

export const App = (): JSX.Element => (
  <div>
    <Router>
      <NavigationBar navigationAlignment="left" />
      <Routes />
    </Router>
  </div>
);
