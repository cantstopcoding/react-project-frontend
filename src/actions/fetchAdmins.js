export function fetchAdmins() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/admins")
      .then((response) => response.json())
      .then((admins) =>
        dispatch({
          type: "FETCH_ADMINS",
          payload: admins,
        })
      )
      .catch((err) => console.error("ERR", err));
  };
}
