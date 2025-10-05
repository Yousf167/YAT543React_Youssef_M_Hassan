import { v4 } from "uuid";

export function createNote(_tag, _title, _description) {
  let time = new Date();

  return {
    id: v4(),
    tag: _tag,
    title: _title,
    desc: _description,
    date: `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`,
  };
}

export function deleteNote(id) {
  if (!id) return false;
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const val = localStorage.getItem(key);
    try {
      const note = JSON.parse(val);
      if (note && note.id === id) {
        localStorage.removeItem(key);
        return true;
      }
    } catch (e) {
      console.error(`Error parsing note with key ${key}:`, e);
      continue;
    }
  }
  return false;
}

export function getNotes() {
  const ret = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const val = localStorage.getItem(key);
    
    try {
      const note = JSON.parse(val);

      if (note && note.id && note.title && note.tag) {
        ret.push({ key, val });
      }
    } catch (e) {
      console.error(`Error parsing note with key ${key}:`, e);
      continue; 
    }
  }
  
  return ret;
}

export function addNote(note){
  localStorage.setItem(note.id, JSON.stringify(note))
}