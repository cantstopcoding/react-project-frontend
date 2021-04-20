import React from "react-redux";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { deleteItem } from "../actions/deleteItem";
import Item from "../components/Item";
import ItemEditOnAccount from "./ItemEditOnAccount";
import { Card, Button, CardDeck } from "react-bootstrap";

const Items = (props) => {
  console.log("ITEM", props.items);

  const handleDelete = (item) => {
    // debugger
    props.deleteItem(item.id, item.account_id);
  };

  return (
    <div>
      <h2>My Items:</h2>
      <div>
        <CardDeck style={{ display: "flex", flexDirection: "row" }}>
          {props.items &&
            props.items.map((item) => (
              <div key={item.id}>
                <Card style={{ width: "21.5rem", height: "97.5%" }}>
                  <Card.Img variant="top" src={item.image_url} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Price: ${item.price}
                      <br />
                      Description: {item.description}
                      <ItemEditOnAccount item={item} />
                      <button onClick={() => handleDelete(item)}>Delete</button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </CardDeck>
      </div>
    </div>
  );
};

export default connect(null, { deleteItem })(Items);
