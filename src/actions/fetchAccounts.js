export function fetchAccounts() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/accounts")
      .then((response) => response.json())
      .then((accounts) =>
        dispatch({
          type: "FETCH_ACCOUNTS",
          payload: accounts.map((account) => ({
            id: account.id,
            firstName: account.first_name,
            lastName: account.last_name,
            email: account.email,
            items: account.items,
            username: account.username,
          })),
        })
      )
      .catch((err) => console.error("ERR", err));
  };
}
