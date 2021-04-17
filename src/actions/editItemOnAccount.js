export const editItemOnAccount = (data) => {
  return (dispatch) => {
    fetch(
      `http://localhost:3000/api/v1/accounts/${data.account_id}/items/${data.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((account) => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "EDIT_ITEM_ON_ACCOUNT", payload: account });
        }
      })
      .catch((err) => console.error("ERR", err));
  };
};
