import React, { Component } from "react";
import ItemInput from "../components/ItemInput";
import Items from "../components/Items";

const ItemsContainer = (props) => {
  return (
    <div>
      <div>
        <ItemInput account={props.account} />
        <Items items={props.account && props.account.items} />
      </div>
    </div>
  );
};

export default ItemsContainer;
