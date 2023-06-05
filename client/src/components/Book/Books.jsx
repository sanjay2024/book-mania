import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchBooks, deleteBook,updateBook } from "../../redux/action/books/bookActions";
import Loading from "../Loading/Loading";

const Books = () => {
  //Fetch books
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const bookslist = useSelector((state) => state.booksList);
  const { book, loading } = bookslist;
  // End of fetch books

  //Delete book handler
  const handlerDeleteBook = (id) => {
    dispatch(deleteBook(id));
    navigate("/books");
  };
  const handlerUpdateBook = (id) => {
    dispatch(updateBook(id));
    navigate("/books");
  };
  return (
    <div>
      {loading && <Loading />}
      {book !== undefined && book.length === 0 ? (
        "No"
      ) : (
        <div className="row">
          <div className="col">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Author</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {book &&
                  book.map((book) => {
                    return (
                      <tr className="table-dark" key={book._id}>
                        <th scope="row">{book.title}</th>
                        <td>{book.author}</td>
                        <td>
                          <i
                            onClick={() => handlerDeleteBook(book._id)}
                            className="fas fa-trash "
                            style={{ color: "red", cursor: "pointer" }}
                          ></i>
                        </td>
                        <td>
                          <Link to={`/book/${book && book._id}`}>
                            <i
                              onClick={() => handlerUpdateBook(book._id,book)}
                              className="far fa-edit"
                              style={{
                                color: "yellow",
                                cursor:"pointer",
                              }}
                            ></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
