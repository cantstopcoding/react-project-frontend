export const editAccount = (data) => {
  const accountData = {
    first_name: data.firstName,
    last_name: data.lastName,
    username: data.username,
    email: data.email,
  };

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(accountData),
    })
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
