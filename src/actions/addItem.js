import { itemData } from "../actionExtractions/actionExtractions";
import { post } from "../actionExtractions/actionExtractions";

export const addItem = (item, accountId) => {
  return (dispatch) => {
    fetch(
      `http://localhost:3000/api/v1/accounts/${accountId}/items`,
      post(itemData(item))
    )
      .then((response) => response.json())
      .then((account) => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "ADD_ITEM", payload: account });
        }
      })
      .catch((err) => console.error("ERR", err));
  };
};
