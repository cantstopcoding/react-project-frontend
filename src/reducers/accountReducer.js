const accountReducer = (
  state = {
    accounts: [],
  },
  action
) => {
  let mappedAccounts = state.accounts.map((account) => {
    if (account.id === action.payload.id) {
      return action.payload;
    } else {
      return account;
    }
  });

  let payload = { ...state, accounts: mappedAccounts };

  switch (action.type) {
    case "FETCH_ACCOUNTS":
      return { accounts: action.payload };
    case "FETCH_ITEM":
      return { ...state, items: [action.payload] };
    case "ADD_ACCOUNT":
      return { ...state, accounts: [...state.accounts, action.payload] };
    case "ADD_ITEM":
      return payload;
    case "DELETE_ACCOUNT":
      return { ...state, accounts: action.payload };
    case "DELETE_ITEM":
      return payload;
    case "EDIT_ACCOUNT":
      return payload;
    case "EDIT_ITEM_ON_ACCOUNT":
      return payload;
    default:
      return state;
  }
};

export default accountReducer;
