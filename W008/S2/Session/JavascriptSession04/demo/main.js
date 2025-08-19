let students = [
    {id : 1 , name : "Shahd" , points : 80 , address : "Banha"} ,
    {id : 2 , name : "Sara" , points : 85 , address : "Alex"},
    {id : 3 , name : "Mai" , points : 90 , address : "Cairo"},
    {id : 4 , name : "Maurien" , points : 95 , address : "Banha"}
]

function render() {
    const tbody = document.querySelector("tbody")

    for(let std of students) {
       const row = document.createElement("tr");
       row.innerHTML = `
            <td>${std.id}</td>
            <td>${std.name}</td>
            <td>${std.points}</td>
            <td>${std.address}</td>
       `
        tbody.appendChild(row);
    }
}

// onload vs DOMContentLoaded

document.addEventListener('DOMContentLoaded' , render)  