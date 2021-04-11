export const editAdmin = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/admins/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((admin) => dispatch({ type: "EDIT_ADMIN", payload: admin }));
  };
};
