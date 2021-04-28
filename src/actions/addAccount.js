import { accountData, postOrPatch } from "../actionExtractions/extractions";

export const addAccount = (data) => {
  return (dispatch) => {
    fetch(
      "http://localhost:3000/api/v1/accounts",
      postOrPatch(accountData(data), "POST")
    )
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
