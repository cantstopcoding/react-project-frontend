import React from "react-redux";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { deleteItem } from "../actions/deleteItem";
import Item from "../components/Item";
import ItemEditOnAccount from "./ItemEditOnAccount";
import { Card, Button } from "react-bootstrap";

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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        {props.items &&
          props.items.map((item) => (
            <div key={item.id}>
              <Card style={{ width: "30rem" }}>
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
      </div>
    </div>
  );
};

export default connect(null, { deleteItem })(Items);
