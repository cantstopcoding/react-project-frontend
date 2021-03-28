import React from "react";
import { Redirect } from "react-router-dom";
import ItemEdit from "./ItemEdit";

import TransactionsContainer from "../containers/TransactionsContainer";

const Item = (props) => {
  // let account = props.accounts[props.match.params.id - 1]
  let item = props.items.filter(
    // match.params.id is a string, not a number!!!
    (item) => `${item.id}` == props.match.params.id
  )[0];

  return (
    <div>
      <h2>
        {item ? item.name : null} - {item ? item.balance : null}
      </h2>
      <TransactionsContainer item={item} />
      <br />
      <h3>Edit Item:</h3>
      <ItemEdit item={item} />
    </div>
  );
};

export default Item;
