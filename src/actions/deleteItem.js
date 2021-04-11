export const deleteItem = (itemId, adminId) => {
  return (dispatch) => {
    return fetch(
      `http://localhost:3000/api/v1/admins/${adminId}/items/${itemId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((admin) => dispatch({ type: "DELETE_ITEM", payload: admin }));
  };
};
