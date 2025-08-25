const url = "http://localhost:5000/notes"

async function getNotes() {
    const res = await fetch(url , {method : "GET"})
    const body = await res.json()
    return body
}


async function renderNotes() {
    const row = document.querySelector('.row')
    const notes = await getNotes()

    notes.forEach(note => {
         const div = document.createElement('div')
        div.className = "col-lg-4 col-sm-12"
        div.innerHTML = `
            <div class="card text-bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">${note.title}</div>
            <div class="card-body">
                <p class="card-text">${note.desc}</p>
                <button class="btn btn-danger 
                btn-sm" onclick="deleteNote('${note.id}')">
                 delete </button>
            </div>
        </div>
        `
        row.appendChild(div)
    })
    
}


function addNote() {
    const title = document.querySelector("#title").value
    const desc = document.querySelector("#desc").value
    const note = {title , desc}
    fetch(url , {
            method : "POST" , 
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(note)
    })
}


function deleteNote(id) {
    fetch(`${url}/${id}` , {
        method : "DELETE"
    })
}

document.addEventListener('DOMContentLoaded' , 
    renderNotes)

const form = document.querySelector('form')
form.addEventListener("submit" , addNote)


// const obj = {x : "fares" , y : 100000}

// console.log("Hello")
// console.log(obj)
// console.log(JSON.stringify(obj))
//JSON.parse()

// fetch(`${url}/${id}` , {
//     method : "PUT" , 
//     headers : {
//         'Content-Type' : 'application/json'
//     } ,
//     body : JSON.stringify()
// })