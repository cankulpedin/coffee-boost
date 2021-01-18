import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowBarLeft, ArrowBarRight } from "react-bootstrap-icons";

import { setSideBarCollapsed } from "../../store/slices/commonSlice";
import { getSideBarOptions } from "../../store/selectors/commonSelector";

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

const StyledArrowBarLeft = styled(ArrowBarLeft)`
  cursor: pointer;
  margin-right: 8px;
`;

const StyledArrowBarRight = styled(ArrowBarRight)`
  cursor: pointer;
  margin-right: 8px;
`;

export const NavigationBar = (
  props: NavigationBarPropsInterface
): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sideBarOptions = useSelector(getSideBarOptions);

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
      <Nav.Item>
        {sideBarOptions.sideBarCollapsed ? (
          <StyledArrowBarRight
            onClick={() =>
              dispatch(setSideBarCollapsed({ sideBarCollapsed: false }))
            }
          />
        ) : (
          <StyledArrowBarLeft
            onClick={() =>
              dispatch(setSideBarCollapsed({ sideBarCollapsed: true }))
            }
          />
        )}
      </Nav.Item>
      <Navbar.Brand>My Brand</Navbar.Brand>
      <Nav.Item>
        <StyledLink to="/">{t("navbar_Home")}</StyledLink>
        <StyledLink to="/about">{t("navbar_About")}</StyledLink>
      </Nav.Item>
    </Navbar>
  );
};
