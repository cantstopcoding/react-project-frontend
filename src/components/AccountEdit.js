import React from "react";
import { connect } from "react-redux";
import { editAccount } from "../actions/editAccount";
import { Accordion, Card, Button } from "react-bootstrap";
import AccountForm from "./AccountForm";

const AccountEdit = (props) => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Edit Account
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <AccountForm account={props.account} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default connect(null, { editAccount })(AccountEdit);
