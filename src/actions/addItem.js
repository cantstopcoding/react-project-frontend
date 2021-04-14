export const addItem = (item, accountId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((account) => {
        // debugger
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "ADD_ITEM", payload: account });
        }
      })
      .catch(console.log);
  };
};
