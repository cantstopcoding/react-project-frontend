export const editItemOnAccount = (data) => {
  const itemData = {
    name: data.name,
    description: data.description,
    price: data.price,
    image_url: data.imageUrl,
  };

  return (dispatch) => {
    fetch(
      `http://localhost:3000/api/v1/accounts/${data.accountId}/items/${data.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(itemData),
      }
    )
      .then((response) => response.json())
      .then((account) => {
        if (account.error) {
          alert(account.error);
        } else {
          dispatch({ type: "EDIT_ITEM_ON_ACCOUNT", payload: account });
        }
      })
      .catch((err) => console.error("ERR", err));
  };
};
