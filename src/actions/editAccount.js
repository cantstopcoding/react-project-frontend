import { accountData, patch } from "../actionExtractions/actionExtractions";

export const editAccount = (data) => {
  return (dispatch) => {
    fetch(
      `http://localhost:3000/api/v1/accounts/${data.id}`,
      patch(accountData(data))
    )
      .then((response) => response.json())
      .then((account) => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "EDIT_ACCOUNT", payload: account });
        }
      })
      .catch((err) => console.error("ERR", err));
  };
};
