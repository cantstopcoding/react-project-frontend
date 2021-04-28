import React from "react";
import ItemForm from "./ItemForm";

const ItemEditOnAccount = (props) => {
  return (
    <div>
      <ItemForm item={props.item} />
    </div>
  );
};

export default ItemEditOnAccount;
