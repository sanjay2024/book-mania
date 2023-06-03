import {React,useState} from 'react'
import {useDispatch} from 'react-redux';
import {createBookActions} from '../../redux/action/books/bookActions'
const AddBook=()=>{
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState(' ');
  const [author, setAuthor] = useState('  ');
  const [publicationDate, setPublicationDate] = useState("  ");
  const dispatch=useDispatch();
  const handleFontSubmit=e=>{
    e.preventDefault();
    dispatch(createBookActions({isbn,category,author,title,publicationDate}))
  }

        return (
          <>
            <div className="row container-height">
              <div className="col-lg-5 col-md-5 m-auto">
                <div className="container-sm">
                  <button
                    type="button"
                    id='button'
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Click to add Book.
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Create Book
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <h1 className="text-center">Add Book</h1>
                          <form onSubmit={handleFontSubmit}>
                            <fieldset>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                  ISBN{" "}
                                </label>
                                <input
                                  value={isbn}
                                  onChange={(e) => setIsbn(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                  category{" "}
                                </label>
                                <input
                                  value={category}
                                  onChange={(e) => setCategory(e.target.value)}
                                  type="text"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                  Author{" "}
                                </label>
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
                                <label htmlFor="exampleInputPassword1">
                                  title
                                </label>
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
                                <label htmlFor="exampleInputPassword1">
                                  publicationDate
                                </label>
                                <input
                                  value={publicationDate}
                                  onChange={(e) =>
                                    setPublicationDate(e.target.value)
                                  }
                                  type="text"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-warning m-auto"
                              >
                                Create Book
                              </button>
                            </fieldset>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
}
export default AddBook