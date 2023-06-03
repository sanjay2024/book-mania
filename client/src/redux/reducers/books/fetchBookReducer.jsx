import { FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FETCH_BOOK_FAIL} from "../../action/actionVaraible";

const fetchBookReducer=(state=[],action)=>{
        switch (action.type) {
                case FETCH_BOOK_REQUEST:
                        return{
                                loading:true
                        }
                case FETCH_BOOK_SUCCESS:
                        return {
                                book:action.payload
                        }
                case FETCH_BOOK_FAIL:
                        return{
                                error:action.payload
                        }
                default:
                       return state;
        }
}
export default fetchBookReducer