import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledSideBar = styled(Nav)`
  height: 100%;
  flex-direction: column;
`;

const StyledNavItem = styled(Nav.Item)`
  padding: 4px;
  margin: 4px 0;
`;

const StyledLink = styled(Link)`
  display: block;
`;

export const SideBar = (): JSX.Element => {
  return (
    <StyledSideBar className="bg-light sidebar">
      <StyledNavItem>
        <StyledLink>1</StyledLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledLink>2</StyledLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledLink>3</StyledLink>
      </StyledNavItem>
    </StyledSideBar>
  );
};
