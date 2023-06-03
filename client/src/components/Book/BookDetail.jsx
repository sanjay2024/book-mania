import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createFetchBookAction, updateBook } from "../../redux/action/books/bookActions";

const BookDetail = ({ history }) => {
  const { isbn} = useParams();

  //Get the book details and fill it in the form
  const bookDetails = useSelector((state) => state.bookDetails);

  const { book, loading } = bookDetails;
  const [Isbn, setIsbn] = useState(book && !loading && book.Isbn);
  const [publicationDate, setPublicationDate] = useState(book && !loading && book.publicationDate);
  const [category, setCategory] = useState(book && !loading && book.category);
  const [title, setTitle] = useState(book && !loading && book.title);
  const [author, setAuthor] = useState(book && book.author);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createFetchBookAction(isbn));
  }, [dispatch, isbn]);

  //dispatch action

  const formSubmitHandler = (e) => {
    const data = {
      Isbn,
      category,
      title,
      author,
    };
    e.preventDefault();
    dispatch(updateBook(isbn, data));
    history.push("/books");
  };
  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          {book ? (
            <>
              <h1 className="text-center">Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Isbn </label>
                    <input
                      value={Isbn}
                      onChange={(e) => setIsbn(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Isbn"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">category </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="custom-select"
                    >
                      <option defaultValue="programming">programming</option>
                      <option value="religion">Religion</option>
                      <option value="life">life</option>
                      <option value="culture">culture</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Author </label>
                    <input
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Author name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">title</label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Book title"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">publicationDate </label>
                    <input
                      value={publicationDate}
                      onChange={(e) => setPublicationDate(e.target.value)}
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="publicationDate"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark m-auto">
                    Create Book
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            "No"
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
