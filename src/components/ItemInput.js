import React from "react";
import ItemForm from "./ItemForm";

const ItemInput = (props) => {
  return (
    <div>
      <ItemForm account={props.account} />
      <br />
    </div>
  );
};

export default ItemInput;
