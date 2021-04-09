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
      <div>
        {props.items &&
          props.items.map((item) => (
            <li key={item.id}>
              {item.kind} - {item.amount}{" "}
              <button onClick={() => handleDelete(item)}>Delete</button>
            </li>
          ))}
      </div>
    </div>
  );
};

export default connect(null, { deleteItem })(Items);
