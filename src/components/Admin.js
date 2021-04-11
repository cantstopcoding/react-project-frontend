import React from "react";
import { Redirect } from "react-router-dom";
import AdminEdit from "./AdminEdit";

import ItemsContainer from "../containers/ItemsContainer";

const Admin = (props) => {
  // let admin = props.admins[props.match.params.id - 1]
  let admin = props.admins.filter(
    // match.params.id is a string, not a number!!!
    (admin) => `${admin.id}` == props.match.params.id
  )[0];

  return (
    <div>
      <h2>
        {admin ? admin.name : null} - {admin ? admin.balance : null}
      </h2>
      <ItemsContainer admin={admin} />
      <br />
      <h3>Edit Admin:</h3>
      <AdminEdit admin={admin} />
    </div>
  );
};

export default Admin;
