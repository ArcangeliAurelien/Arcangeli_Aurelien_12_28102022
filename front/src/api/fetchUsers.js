const url = `http://localhost:3000/user/`

function fetchUsersData() {
    return fetch(url)
        .then(response => response.json())
        .then(user => console.log(user))
        .catch(error => console.log(error))
}

export default fetchUsersData