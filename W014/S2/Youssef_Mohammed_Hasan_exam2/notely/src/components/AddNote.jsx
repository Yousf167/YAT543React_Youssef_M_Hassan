import { useRef } from "react";
import { addNote, createNote } from "../services";
import { useNavigate } from "react-router-dom";

function AddNote() {
      //TODO: Handle empty form
      const tag = useRef();
      const title = useRef();
      const desc = useRef();
      const navigate = useNavigate(); 

      function handleSubmit(e) {
            e.preventDefault();

            const note = createNote(
                  tag.current.value,
                  title.current.value,
                  desc.current.value
            );

            addNote(note);
            navigate("/"); 
      }

      return (
            <div className="container shadow-2xl mx-auto mt-40 bg-white rounded-2xl p-5">
                  <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="flex border-b pb-3 items-center ">
                              <p>Select a tag</p>
                              <select
                                    className="border-2 rounded-full px-3 py-1 ml-6"
                                    name="tag"
                                    ref={tag}
                              >
                                    <option value="Personal">Personal</option>
                                    <option value="Business">Business</option>
                                    <option value="Home">Home</option>
                              </select>
                        </div>
                        <input
                              ref={title}
                              className="border-b pb-3"
                              type="text"
                              placeholder="Enter a title"
                        />
                        <textarea
                              ref={desc}
                              className="border-b pb-3"
                              placeholder="Enter the description"
                        ></textarea>
                        <button
                              className="transition-all border-2 text-green-400 hover:bg-green-400 rounded-full w-40 h-10 self-center hover:text-white"
                              type="submit"
                        >
                              Submit
                        </button>
                  </form>
            </div>
      );
}

export default AddNote;
