import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const Navigation = (props) => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Caroline DAmbrosio Designs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" style={{ paddingRight: "10px" }}>
              Home
            </Link>

            <Link to="/about" style={{ paddingRight: "10px" }}>
              About
            </Link>

            <Link to="/contact" style={{ paddingRight: "10px" }}>
              Contact
            </Link>

            <Link to="/accounts" style={{ paddingRight: "10px" }}>
              Accounts{" "}
            </Link>
            <Link to="/accounts/new"> Create Account</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div></div>
    </Styles>
  );
};

export default Navigation;
