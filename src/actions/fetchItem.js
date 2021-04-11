export const fetchItem = (itemId, adminId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/admins/${adminId}/items/${itemId}`
    )
      .then((response) => response.json())
      .then((item) => dispatch({ type: "FETCH_ITEM", payload: item }));
  };
};
