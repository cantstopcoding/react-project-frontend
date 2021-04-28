export const deleteItem = (itemId, accountId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/accounts/${accountId}/items/${itemId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((account) => dispatch({ type: "DELETE_ITEM", payload: account }))
      .catch((err) => console.error("ERR", err));
  };
};
