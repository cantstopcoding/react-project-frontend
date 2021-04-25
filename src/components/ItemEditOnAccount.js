import React from "react";
import { connect } from "react-redux";
import { editItemOnAccount } from "../actions/editItemOnAccount";
import { Accordion, Card, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";

const ItemEditOnAccount = (props) => {
  return (
    <div>
      <ItemForm item={props.item} />
    </div>
  );
};

export default connect(null, { editItemOnAccount })(ItemEditOnAccount);
