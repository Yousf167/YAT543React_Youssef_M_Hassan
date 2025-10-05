import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBook } from "../../services/books.service";
function Details() {
  const { id } = useParams()
  const [book, setBook] = useState({})
  useEffect(() => {
    getBook(id)
      .then(res => setBook(res.data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <h1 className="text-center my-5 w-50 
        container text-white py-3 rounded bg-dark">Book Details</h1>

      <section className="container text-center w-50 mx-auto my-5">
        <div class="card">
          <div class="card-header fw-bolder fs-1">
            {book.title}
          </div>
          <div class="card-body">
            <div className="alert alert-dark p-2 m-3">
              Book Price <strong>{book.price} <br />
                Created By <strong>{book.author} </strong> </strong>
            </div>
            <p class="card-text"> {book.desc} </p>
            <Link to="/" class="btn btn-dark">Return to home</Link>
          </div>
        </div>
      </section>

    </>
  );
}

export default Details;