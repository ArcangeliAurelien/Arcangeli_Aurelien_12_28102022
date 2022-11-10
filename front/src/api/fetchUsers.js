/**
 * 
 */

const url = 'http://localhost:3000/'

function fetchUsers() {
    return fetch(url)
        .then(response => response.json())
        .then(user => console.log(user))
}