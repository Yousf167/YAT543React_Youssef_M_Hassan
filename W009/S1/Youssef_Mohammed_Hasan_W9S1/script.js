async function getUsersFromJSON(url){
      const users = await fetch(url, {
            method: "GET"
      });
      const body = await users.json();
      return body;
}


function renderUsersTable(data){
      const tbody = document.getElementById("usersTable")
      for(let datum of data){
            const row = document.createElement("tr");
            row.innerHTML = `
                  <td>${datum.id}</td>
                  <td>${datum.name}</td>
                  <td>${datum.username}</td>
                  <td>${datum.email}</td>
                  <td>${datum.phone}</td>
                  <td>${datum.website}</td>
                  <td>${`${datum.address.city}, ${datum.address.street}, ${datum.address.suite}`}</td>
                  <td>${datum.address.zipcode}</td>
            `;
            tbody.appendChild(row)
      }
}


function renderCompanyTable(data) {
      const tbody = document.getElementById("companyTable")
      for(let datum of data){
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${datum.company.name}</td>
            <td>${datum.company.catchPhrase}</td>
            <td>${datum.company.bs}</td>
            `
            tbody.appendChild(row)
      }
}


const url = "https://jsonplaceholder.typicode.com/users";
async function render() {
      const data = await getUsersFromJSON(url);
      renderUsersTable(data);
      renderCompanyTable(data);
}



document.addEventListener('DOMContentLoaded', render)
