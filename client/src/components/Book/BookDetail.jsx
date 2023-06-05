import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBook, updateBook } from "../../redux/action/books/bookActions";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookDetails = useSelector((state) => state.bookDetails);

  const { book, loading } = bookDetails;

  const [category, setCategory] = useState(book && !loading && book.category);
  const [title, setTitle] = useState(book && !loading && book.title);
  const [author, setAuthor] = useState(book && book.author);
   const [publishedDate, setPublishedDate] = useState(book && book.author);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = (e) => {
    const data = {
      category,
      title,
      author,
    };
    e.preventDefault();
    dispatch(updateBook(id, data));
    navigate("/books");
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
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="custom-select"
                    >
                      <option defaultValue="programming">programming</option>
                      <option value="religion">Romance</option>
                      <option value="life">life</option>
                      <option value="culture">poetry</option>
                      <option value="culture">Cooking</option>
                      <option value="culture">travel literature</option>
                      <option value="culture">classic</option>
                      <option value="culture">childers story</option>
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
                    <label htmlFor="exampleInputPassword1">title</label>
                    <input
                      value={publishedDate}
                      onChange={(e) => setPublishedDate(e.target.value)}
                      type="date"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="publishedDate"
                    />
                  </div>
                  <button type="submit" className="btn btn-dark m-auto">
                    Update Book
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
