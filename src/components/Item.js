import React from "react";
import { editItem } from "../actions/editItem";

const Item = (props) => {
  console.log("hiii", props);

  const handleEdit = () => {
    editItem({ id: "1", name: "new name" });
  };

  console.log(props.item);
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
