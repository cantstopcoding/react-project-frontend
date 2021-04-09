import React from "react-redux";
import ItemInput from "./ItemInput";
import { connect } from "react-redux";
import { deleteItem } from "../actions/deleteItem";

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
        {props.items &&
          props.items.map((item) => (
            <li key={item.id}>
              {item.name} - Price: ${item.price}{" "}
              {item.description}
              <button onClick={() => handleDelete(item)}>Delete</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default connect(null, { deleteItem })(Items);
