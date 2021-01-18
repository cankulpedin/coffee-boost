import React from "react";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getSideBarOptions } from "../../store/selectors/commonSelector";

const StyledSideBar = styled(Nav)`
  ${(props) => (props.isCollapsed ? "display: none;" : "display: flex;")}
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
  const sideBarOptions = useSelector(getSideBarOptions);
  console.log(sideBarOptions);
  return (
    <StyledSideBar
      isCollapsed={sideBarOptions.sideBarCollapsed}
      className="bg-light sidebar"
    >
      <StyledNavItem>
        <StyledLink to="#">1</StyledLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledLink to="#">2</StyledLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledLink to="#">3</StyledLink>
      </StyledNavItem>
      <StyledNavItem></StyledNavItem>
    </StyledSideBar>
  );
};
