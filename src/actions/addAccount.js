export const addAccount = (data) => {
    debugger
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/accounts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
}