export default function accountReducer(
  state = {
    accounts: [],
    item: {},
  },
  action
) {
  switch (action.type) {
    case "FETCH_ACCOUNTS":
      return { accounts: action.payload };
    case "ADD_ACCOUNT":
      return { ...state, accounts: [...state.accounts, action.payload] };
    case "FETCH_ITEM":
      return { ...state, items: [action.payload] };
    case "ADD_ITEM":
      let accounts = state.accounts.map((account) => {
        if (account.id === action.payload.id) {
          return action.payload;
        } else {
          return account;
        }
      });
      return { ...state, accounts: accounts };
    case "DELETE_ACCOUNT":
      return { ...state, accounts: action.payload };
    case "DELETE_ITEM":
      let accountsTWO = state.accounts.map((account) => {
        if (account.id === action.payload.id) {
          return action.payload;
        } else {
          return account;
        }
      });
      return { ...state, accounts: accountsTWO };
    case "EDIT_ACCOUNT":
      let accountsThree = state.accounts.map((account) => {
        if (account.id === action.payload.id) {
          return action.payload;
        } else {
          return account;
        }
      });
      return { ...state, accounts: accountsThree };
    case "EDIT_ITEM":
      return { ...state, item: action.payload };
    case "EDIT_ITEM_ON_ACCOUNT":
      let accountsNine = state.accounts.map((account) => {
        if (account.id === action.payload.id) {
          return action.payload;
        } else {
          return account;
        }
      });

      return { ...state, accounts: accountsNine };
    default:
      return state;
  }
}
