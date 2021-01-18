import React from "react";
import { useDispatch } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { setSideBarCollapsed } from "../../store/slices/commonSlice";

interface NavigationBarPropsInterface {
  navigationAlignment: string;
}

const ALIGNMENT_CONSTANTS = {
  LEFT: "justify-content-start",
  RIGHT: "justify-content-between",
};

const StyledLink = styled(Link)`
  margin-left: 4px;
`;

export const NavigationBar = (
  props: NavigationBarPropsInterface
): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const getAlignmentClass = () => {
    switch (props.navigationAlignment) {
      case "right":
        return ALIGNMENT_CONSTANTS.RIGHT;
      case "left":
      default:
        return ALIGNMENT_CONSTANTS.LEFT;
    }
  };

  return (
    <Navbar className={getAlignmentClass()} bg="light">
      <Navbar.Brand>My Brand</Navbar.Brand>
      <Nav.Item>
        <StyledLink to="/">{t("navbar_Home")}</StyledLink>
        <StyledLink
          to="/about"
          onClick={() => {
            console.log("ss");
            dispatch(setSideBarCollapsed());
          }}
        >
          {t("navbar_About")}
        </StyledLink>
      </Nav.Item>
    </Navbar>
  );
};
