export const editAccount = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((account) => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "EDIT_ACCOUNT", payload: account });
        }
      })
      .catch(console.log);
  };
};
