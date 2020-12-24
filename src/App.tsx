import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "./routes/Routes";
import { NavigationBar } from "./components/navigation-bar/NavigationBar";
import { SideBar } from "./components/side-bar/SideBar";

const MainContainer = styled.div`
  height: 100%;
`;

const StyledContainer = styled(Container)`
  height: 100%;
  padding: 0;
  margin: 0;
`;

const StyledMainRow = styled(Row)`
  height: 100%;
`;

const StyledMainColumnFirst = styled(Col)`
  padding-right: 0;
`;

const StyledMainColumnSecond = styled(Col)`
  padding-left: 0;
`;

export const App = (): JSX.Element => (
  <MainContainer>
    <Router>
      <StyledContainer no-gutters mx-0 px-0 fluid>
        <StyledMainRow noGutters={true}>
          <StyledMainColumnFirst md={2}>
            <SideBar />
          </StyledMainColumnFirst>
          <StyledMainColumnSecond md={10}>
            <NavigationBar navigationAlignment="left" />
            <Routes />
          </StyledMainColumnSecond>
        </StyledMainRow>
      </StyledContainer>
    </Router>
  </MainContainer>
);
