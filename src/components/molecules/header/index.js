import React from "react";
import { Link } from "react-router-dom";
import { isUserAuthenticated, removeCookie } from "../../../utils/cookie";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 10px 120px;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: inline-block;
  font-weight: bold;
  padding: 20px;
  color: #045762;
  cursor: pointer;
  &:hover {
    color: #d35d6e;
  }
`;

const handleClickButton = () => {
  if (window.confirm("Logout?")) {
    removeCookie("userData");
    removeCookie("token");
    window.location.replace("/");
  }
};

const userAuthenticated = () => {
  if (isUserAuthenticated()) {
    return (
      <>
        <Link to="/Product">
          <Menu>Product</Menu>
        </Link>
        <Menu
          onClick={() => {
            handleClickButton();
          }}
        >
          Sign Out
        </Menu>
      </>
    );
  }
  return "";
};

const Header = () => {
  const listMenu = ["Home", "Profile", "Contact"];

  return (
    <Container>
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <Menu>{name}</Menu>
          </Link>
        );
      })}
      {userAuthenticated()}
    </Container>
  );
};
export default Header;
