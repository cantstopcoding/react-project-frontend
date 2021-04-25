import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/addItem";
import { Accordion, Card, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";

const ItemInput = (props) => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Create an Item
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ItemForm account={props.account} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
    </div>
  );
};

export default connect(null, { addItem })(ItemInput);
