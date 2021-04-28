import { accountData } from "../actionExtractions/actionExtractions";
import { post } from "../actionExtractions/actionExtractions";

export const addAccount = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/accounts", post(accountData(data)))
      .then((response) => response.json())
      .then((account) => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "ADD_ACCOUNT", payload: account });
        }
      })
      .catch((err) => console.error("ERR", err));
  };
};
