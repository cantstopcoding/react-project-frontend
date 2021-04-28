export const deleteAccount = (accountId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/accounts/${accountId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((accounts) =>
        dispatch({ type: "DELETE_ACCOUNT", payload: accounts })
      )
      .catch((err) => console.error("ERR", err));
  };
};
