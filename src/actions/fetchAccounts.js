export function fetchAccounts(action) {
    return (dispatch) => {
        console.log('FETCHING')
        fetch('http://localhost:3000/api/v1/accounts')
        .then(response =>  response.json())
        .then(accounts => {
            console.log("ACCOUNTS", accounts)
            dispatch({
            type: 'FETCH_ACCOUNTS',
            payload: accounts    
        })})
        .catch(err => console.error('ERR', err))
    } 
}