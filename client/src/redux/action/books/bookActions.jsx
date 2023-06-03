
import{BOOK_DETAIL_FAIL, BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, BOOK_UPDATE_FAIL, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS, CREATE_BOOK_FAIL,CREATE_BOOK_REQUEST,CREATE_BOOK_SUCCESS, DELETE_BOOK_FAIL, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS} from "../actionVaraible";
import axios from "axios";

// createBook
const createBookActions = (bookDetails) => {
        return async (dispatch) => {
                try {
                        dispatch({
                                type: CREATE_BOOK_REQUEST,
                        });

                        const config = {
                                "content-type": "application/json",
                        };

                        const { data } = await axios.post(
                                "/api/books/addBook",
                                bookDetails,
                                config
                        );

                        // for success dispatch
                        dispatch({
                                type: CREATE_BOOK_SUCCESS,
                                payload: data,
                        });
                } catch (error) {
                        // failure dispatch

                        dispatch({
                                type: CREATE_BOOK_FAIL,
                                payload:error.response && error.response.message
                        });
                }
        };
};

//fetchBook
const createFetchBookAction=()=>{
        return async(dispatch)=>{
                try {
                        dispatch({
                                type:FETCH_BOOK_REQUEST
                        })
                        const config = {
                           header:{ "content-type": "application/json"}
                          };
                        const {data}=await axios.get('/api/books',config);
                        dispatch({
                                type:FETCH_BOOK_SUCCESS,
                                payload:data
                        })
                } catch (error) {
                        dispatch({
                                type:FETCH_BOOK_FAIL,
                                payload:error.response && error.response.message
                        })
                }
        }
}

//deleteBook
export const deleteBook = isbn => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_BOOK_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.delete(`/api/books/${isbn}`, config);
      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch a signle book
export const fetchBook = (isbn, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_DETAIL_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`/api/books/${isbn}`, bookData, config);

      dispatch({
        type: BOOK_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_DETAIL_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//UPDATE BOOK

export const updateBook = (isbn, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(`/api/books/${isbn}`, bookData, config);
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
}
export {createBookActions,createFetchBookAction}