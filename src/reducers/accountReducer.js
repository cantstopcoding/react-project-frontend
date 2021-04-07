export default function accountReducer(state = {
    accounts: []
}, action) {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADD_ITEM':
          let accounts = state.accounts.map(account => {
            if (account.id === action.payload.id) {
              return action.payload
            } else {
              return account
            }
          })
          return {...state, accounts: accounts}
        case 'DELETE_ITEM':
          let accountsTWO = state.accounts.map(account => {
            if (account.id === action.payload.id) {
              return action.payload
            } else {
              return account
            }
          })
          return {...state, accounts: accountsTWO}
        case 'EDIT_ACCOUNT':
          let accountsThree = state.accounts.map(account => {
            if (account.id === action.payload.id) {
              return action.payload
            } else {
              return account
            }
          })
          return {...state, accounts: accountsThree}
        default:
            return state 
    }
    
}