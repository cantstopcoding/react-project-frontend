export const addItem = (item, adminId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/admins/${adminId}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((admin) => {
        // debugger
        if (admin.error) {
          alert(admin.error);
        } else {
          dispatch({ type: "ADD_ITEM", payload: admin });
        }
      });
  };
};
