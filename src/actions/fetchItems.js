export function fetchItems() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/items")
      .then((r) => r.json())
      .then((payload) =>
        dispatch({
          type: "FETCH_ITEMS",
          payload,
        })
      );
  };
}
