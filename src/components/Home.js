import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <h2>
      <Link to="/accounts" style={{ paddingRight: "10px" }}>
        View Accounts
      </Link>
    </h2>
    <h2>
      <Link to="/accounts/new"> Create New Account</Link>
    </h2>
  </div>
);
