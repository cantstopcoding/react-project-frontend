export const addAdmin = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/admins", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((admin) => dispatch({ type: "ADD_ADMIN", payload: admin }));
  };
};
