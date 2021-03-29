import React from "react";
import { Redirect } from "react-router-dom";

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
        {item ? item.name : null} - ${item ? item.price : null}
        <br />
        {item ? <img src={item.image_url} /> : null}
        {/* don't like that it's in ruby syntax */}
      </h2>
      <TransactionsContainer item={item} />
    </div>
  );
};

export default Item;
