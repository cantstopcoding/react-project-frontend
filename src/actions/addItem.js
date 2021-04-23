export const addItem = (item, accountId) => {
  const itemData = {
    name: item.name,
    description: item.description,
    price: item.price,
    image_url: item.imageUrl,
  };

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((response) => response.json())
      .then((account) => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "ADD_ITEM", payload: account });
        }
      })
      .catch((err) => console.error("ERR", err));
  };
};
