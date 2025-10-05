function Note({ note, onDelete }) {
  function getColor(tag) {
    switch (tag) {
      case "Business":
        return "bg-violet-400";
      case "Home":
        return "bg-green-300";
      case "Personal":
        return "bg-amber-300";
      default:
        return "bg-gray-300";
    }
  }

  return (
    <div
      id={note.id}
      className="flex flex-col justify-center p-5 bg-white shadow-lg rounded-3xl"
    >
      <div className="flex items-center justify-between w-[100%]">
        <p
          className={`${getColor(note.tag)} text-black text-[14px] rounded-full px-3 py-1`}
        >
          {note.tag}
        </p>
        <div className="flex w-40 items-center justify-between">
          <input type="checkbox"></input>
          <button className="bg-green-300 px-2 rounded-full">Edit</button>
          <button
            className="bg-red-400 px-2 rounded-full"
            onClick={() => {
              onDelete(note.id); 
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <h3 className="text-2xl font-medium">{note.title}</h3>
      <p>{note.desc}</p>
      <p className="text-gray-500 self-end">{note.date}</p>
    </div>
  );
}

export default Note;