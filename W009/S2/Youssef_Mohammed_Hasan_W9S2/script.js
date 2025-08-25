// Functions
const url = "http://localhost:3030/notes";
const updateTitle = document.getElementById("update-title")
const updateDesc = document.getElementById("update-desc")
const updateID = document.getElementById("update-ID")
async function getData(){
      const data = await fetch(url)
      return await data.json();
}

function addNote(event){
      event.preventDefault()
      const title = document.getElementById("title").value
      const desc = document.getElementById("desc").value
      const note = {title, desc}
      fetch(url, {
            method: "POST",
            headers: {
                  "Content-Type" : "application/json"
            },
            body: JSON.stringify(note)
      })
      .then(response => response.json())
      .then(data => console.log("Note Added"))
      .catch(error => console.log("Error: ", error))
}

async function updateNote(id){
      const content = await (await fetch(`${url}/${id}`)).json()
      console.log(content);

      updateID.value = content.id
      updateTitle.value = content.title
      updateDesc.value = content.desc
}
async function handleUpdate(event) {
      event.preventDefault()  
      console.log(`${url}/${updateID.value}`);
      await fetch(`${url}/${updateID.value}`, {
            method: "PUT",
            headers: {
                  "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                  "id": updateID.value,
                  "title": updateTitle.value,
                  "desc": updateDesc.value
            })
      })
      .then(response => response.json())
      .then(data => {
            console.log("Note updated");
            document.getElementById("notes").innerHTML = "";
            renderNotes();
      })
      .catch(error => console.log("Error: ", error))
}


function deleteNote(id){
      fetch(`${url}/${id}`, {
            method: "DELETE"
      })
      .then(response => response.json())
      .then(data => console.log("Note Deleted"))
      .catch(error => console.log("Error: ", error))
}

async function renderNotes(){
      const notes = document.getElementById("notes")
      notes.innerHTML = ""
      const data = await getData();
      const NotesDiv = document.getElementById("notes")
      data.forEach(note => {
            NotesDiv.innerHTML += `
            <div id="${note.id}" class="card text-bg-light m-2 shadow rounded-4" style="width: 24rem;">
                  <div class="card-header">${note.title}</div>
                  <div class="card-body">
                        <p class="card-text border-bottom">${note.desc}</p>
                        
                        <div class="d-flex align-items-center pt-3 justify-content-between">
                              <button class="btn btn-danger 
                              btn-sm rounded-5 " onclick="deleteNote('${note.id}')">Delete Note</button>
                              <button class="btn btn-outline-danger
                              btn-sm rounded-5 " onclick="updateNote('${note.id}')">Update Note</button>
                        </div>
                  </div>
            </div>
            `
      })
      new Masonry('.notes-container', {
            itemSelector: '.card',
            columnLength: '.card',

      })
}



document.addEventListener("DOMContentLoaded", renderNotes);
document.addEventListener("DOMContentLoaded", () => {

});

const form = document.querySelector("form")
form.addEventListener("submit", addNote)

const updateForm = document.getElementById("update-form");
updateForm.addEventListener("submit", handleUpdate);