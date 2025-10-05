import { useState } from "react";
import { getNotes, deleteNote } from "../services";
import Note from "./Note";

function Display() {
  let [notes, setNotes] = useState(getNotes());

  const handleDelete = (id) => {
    const deleted = deleteNote(id);
    if (deleted) {
      setNotes(getNotes());
    } else {
      console.error('Failed to delete note:', id);
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl mt-30">Your notes</h1>
      <div>
        <div>
          <button id="1">ALL</button>
          <button id="2">PERSONAL</button>
          <button id="3">HOME</button>
          <button id="4">BUSINESS</button>
        </div>
        <input type="checkbox" aria-label="Show only completed notes"></input>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {notes.map((element, index) => {
          try {
            const note = JSON.parse(element.val);
            return (
              <Note key={index} note={note} onDelete={handleDelete} />
            );
          } catch (e) {
            console.log(e);
          }
        })}
      </div>
    </div>
  )
}

export default Display