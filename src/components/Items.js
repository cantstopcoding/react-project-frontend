import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <li key={item.id}>
          <Link to={`/items/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </div>
  );
};

Items.defaultProps = {
  items: [],
};

export default Items;

// return (
//     <div>
//         {props.accounts.map(account =>
//             <li key={account.id}>
//                 <Link to={`/accounts/${account.id}`}>{account.name}</Link>
//             </li>
//             // <Account account={account}/>
//         )}
//     </div>
