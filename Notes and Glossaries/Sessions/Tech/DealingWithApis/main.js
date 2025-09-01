async function getUsers() {
    //const url = "https://jsonplaceholder.typicode.com/users"
    const url = "http://localhost:3000/users"
    const res = await fetch(url , {method : "GET"})
    const body = await res.json()
    return body
}

async function renderUsers() {
    const users = await getUsers();
    const tbody = document.querySelector('tbody')
    for(let user of users) {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
        `;
        tbody.appendChild(row);
    }

}

document.addEventListener('DOMContentLoaded' , renderUsers)