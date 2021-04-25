import React from "react";
import { connect } from "react-redux";
import { editItemOnAccount } from "../actions/editItemOnAccount";
import { Accordion, Card, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";

const ItemEditOnAccount = (props) => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Edit Item:
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ItemForm item={props.item} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default connect(null, { editItemOnAccount })(ItemEditOnAccount);
