export const fetchItem = (itemId, accountId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/accounts/${accountId}/items/${itemId}`
    )
      .then((response) => response.json())
      .then((item) => dispatch({ type: "FETCH_ITEM", payload: item }))
      .catch((err) => console.error("ERR", err));
  };
};
