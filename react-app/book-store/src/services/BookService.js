
import axios from "axios";
var pageView = sessionStorage.getItem("pageView");
const BOOK_API_BASE_URL = "http://localhost:9999/book";
const BOOK_API_BASE_URL_USER = "http://localhost:9999/book/user/" + pageView;
class BookService {
    
    getBook(){
        return axios.get(BOOK_API_BASE_URL);
    }

    getBookByUserName(){
        return axios.get(BOOK_API_BASE_URL_USER);
    }
}

export default new BookService();