import React from "react";
import { Route, Link } from "react-router-dom";
import Admin from "./Admins";

const Admins = (props) => {
  return (
    <div>
      {props.admins.map(
        (admin) => (
          <li key={admin.id}>
            <Link to={`/admins/${admin.id}`}>{admin.name}</Link>
          </li>
        )
        // <Admin admin={admin}/>
      )}
    </div>
  );
};

export default Admins;
