import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createFetchBookAction, deleteBook } from "../../redux/action/books/bookActions";
import Loading from "../Loading/Loading";

const Books = () => {
  //Fetch books
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createFetchBookAction());
  }, [dispatch]);
  const { books, loading } = useSelector((state) => {
    return state.bookList;
  });
  // End of fetch books

  //Delete book handler
  const handlerDeleteBook = (isbn) => {
    dispatch(deleteBook(isbn));
    // history.push("/books");
  };
  console.log(books)
  return (
    <div>
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
              {loading ? (
                <Loading />
              ) : (
                <>
                  {books &&
                    books.map((book) => {
                      return (
                        <>
                          {/* Map through here */}
                          <tr className="table-dark">
                            <th scope="row">{book.title}</th>
                            <td>{book.author}</td>
                            <td>
                              <i
                                className="fas fa-trash "
                                style={{
                                  color: "red",
                                  cursor: "progress",
                                }}
                              ></i>
                            </td>
                            <td>
                              <i
                                className="far fa-edit"
                                style={{
                                  color: "yellow",
                                  cursor: "progress",
                                }}
                              ></i>
                            </td>
                          </tr>
                          {/* End of map thr */}
                        </>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Books;
