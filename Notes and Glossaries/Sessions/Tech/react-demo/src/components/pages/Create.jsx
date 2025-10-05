import { useState } from "react";
import { addBook } from "../../services/books.service";
import { useNavigate } from "react-router-dom";
function Create() {
    const navigate = useNavigate()
    const [book , setBook] = useState({
        title : "" , 
        price : "" , 
        author : "" , 
        desc : ""
    });


    const onSubmitForm = (event) => {
        // prevent default submit
        event.preventDefault();
        if(book.title !== "" && 
            book.price !== "" && 
            book.author !== 0 && 
            book.desc !== "") {
              addBook(book)
              .then(() => {
                alert("Book Added Successfully")
                navigate("/");
              })
        }
    }

    return (
        <>
     <h1 className="text-center my-5 w-50 container
      text-white py-3 rounded bg-dark">Create New Book</h1>
       <section className="my-5 w-50 container mx-auto">
        <form onSubmit={onSubmitForm}>
            <div className="form-group my-2">
                <label htmlFor="title"
                 className="fw-bold">Book Title</label>
                <input type="text" id="title" 
                className="form-control" 
                onChange={(event) => setBook({...book , title : event.target.value})}/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="price" className="fw-bold">Book Price</label>
                <input type="text" id="price" 
                className="form-control"
                 onChange={event => setBook({...book , price : event.target.value})}/></div>
            <div className="form-group my-2">
                <label htmlFor="author" className="fw-bold">Book Author</label>
                <input type="text" id="author" className="form-control" 
                 onChange={event => setBook({...book , author : event.target.value})}
                /></div>
            <div className="form-group my-2">
                <label htmlFor="desc" className="fw-bold">Book Description</label>
                <textarea type="text" 
                id="" className="form-control py-3"
                onChange={(event) => setBook({...book , desc : event.target.value})}>
            </textarea></div>
            <input type="submit" value="Add Book" className="btn btn-dark mt-2"/>
        </form>
       </section>

        </>
      );
}

export default Create;