import { useEffect, useState } from "react";
import { destroyBook, getBooks } from "../../services/books.service";
import { Link } from "react-router-dom";
function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err.message))
    }, [])

    const deleteBook = (id) => {
        const confirmDelete = window.confirm("Are U Sure ? ")
        if (confirmDelete) {
            destroyBook(id)
                .then(() => {
                    alert("Book Deleted Successfully");
                    // remove the book from UI without re-fetching
                    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
                })
        }
    }

    return (
        <>
            <h1 className="text-center my-5 w-50 container text-white py-3 rounded bg-dark">All Books</h1>

            <section className="my-5 text-center w-75 mx-auto container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Author</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.price}</td>
                                    <td>{book.author}</td>
                                    <td>{book.desc}</td>
                                    <td>
                                        <Link to={`/details/${book.id}`}
                                            className="btn btn-primary btn-sm mx-1">Show</Link>
                                        <Link to={`/edit/${book.id}`} className="btn btn-success btn-sm mx-1">Edit</Link>
                                        <button onClick={() => deleteBook(book.id)}
                                            className="btn btn-danger btn-sm mx-1">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default Home;