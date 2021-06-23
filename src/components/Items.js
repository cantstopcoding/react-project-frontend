import React from "react-redux";
import { connect } from "react-redux";
import { deleteItem } from "../actions/deleteItem";
import ItemEditOnAccount from "./ItemEditOnAccount";
import { Card, CardDeck } from "react-bootstrap";

const Items = (props) => {
  console.log("ITEM", props.items);

  const handleDelete = (item) => {
    props.deleteItem(item.id, item.accountId);
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
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    Price: ${item.price}
                    <br />
                    Description: {item.description}
                    <br />
                    <button onClick={() => handleDelete(item)}>Delete</button>
                    <ItemEditOnAccount item={item} />
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
