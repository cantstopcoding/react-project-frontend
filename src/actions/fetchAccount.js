export const fetchAccount = (data) => {
    console.log(data,'dataaaa')
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/accounts/${data}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
        })
        .then(response => response.json())
        .then(account => dispatch({type: 'SET_CURRENT_ACCOUNT', payload: account}))
    }
}