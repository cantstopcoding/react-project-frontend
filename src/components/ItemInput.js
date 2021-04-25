import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/addItem";
import { Accordion, Card, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";

const ItemInput = (props) => {
  return (
    <div>
      <ItemForm account={props.account} />
      <br />
    </div>
  );
};

export default connect(null, { addItem })(ItemInput);
