import React from "react";
import { editItem } from "../actions/editItem";

const Item = (props) => {
  const handleEdit = () => {
    editItem({ id: "1", name: "new name" });
  };

  return (
    <div>
      {props.item.item ? (
        <div>
          <div>{props.item.item[0].name}</div>
          <div>${props.item.item[0].price}</div>
          <button onClick={handleEdit}>Edit Item</button>
        </div>
      ) : null}
    </div>
  );
};

export default Item;
