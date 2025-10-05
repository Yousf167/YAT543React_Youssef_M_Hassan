import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, updateBook } from "../../services/books.service";

function Edit() {
    const { id } = useParams();
    const [book, setBook] = useState({
        id: id,
        title: "",
        price: "",
        author: "",
        desc: ""
    })

    const [originalBook, setOriginal] = useState({})

    function revert(e) {
        e.preventDefault()
        if (originalBook) {
            setBook(originalBook)
        }
    }

    useEffect(() => {
        getBook(id)
            .then(res => {
                setBook(res.data)
                setOriginal(res.data)
            })
    }, [id])

    const navigate = useNavigate();
    const editBook = (event) => {
        event.preventDefault();
        if (book.title !== "" &&
            book.price !== "" &&
            book.author !== 0 &&
            book.desc !== "") {
            updateBook(id, book)
                .then(() => {
                    alert("Book Updated Successfully")
                    navigate("/")
                })
        }
    }

    return (
        <>
            <h1 className="text-center my-5 w-50 container
      text-white py-3 rounded bg-dark">Edit Book</h1>
            <section className="my-5 w-50 container mx-auto">
                <form onSubmit={editBook}>
                    <div className="form-group my-2">
                        <label htmlFor="title"
                            className="fw-bold">Book Title</label>
                        <input type="text" id="title"
                            className="form-control"
                            value={book.title}
                            onChange={e => setBook({ ...book, title: e.target.value })}
                        />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="price" className="fw-bold">Book Price</label>
                        <input type="text" id="price"
                            className="form-control"
                            value={book.price}
                            onChange={e => setBook({ ...book, price: e.target.value })}
                        /></div>
                    <div className="form-group my-2">
                        <label htmlFor="author" className="fw-bold">Book Author</label>
                        <input type="text" value={book.author}
                            onChange={e => setBook({ ...book, author: e.target.value })}
                            id="author" className="form-control"

                        /></div>
                    <div className="form-group my-2">
                        <label htmlFor="desc" className="fw-bold">Book Description</label>
                        <textarea type="text" value={book.desc}
                            onChange={e => setBook({ ...book, desc: e.target.value })}
                            id="desc" className="form-control py-3">
                        </textarea></div>
                    <input type="submit" value="Edit Book" className="btn btn-success mt-2" />
                    <button className="btn btn-info ms-2" onClick={revert}>Revert</button>
                </form>
            </section>

        </>
    );
}

export default Edit;