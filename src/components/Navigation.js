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
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Link to="/accounts" style={{ paddingRight: "5px" }}>
          Accounts{" "}
        </Link>
        <Link to="/accounts/new"> Create Account</Link>
      </div>
    </Styles>
  );
};

export default Navigation;
