
import axios from "axios";
var pageView = sessionStorage.getItem("pageView");
const BOOK_API_BASE_URL = "http://localhost:9999/book";
const BOOK_API_BASE_URL_USER = "http://localhost:9999/book/user/" + pageView;
const BOOK_UPDATE_API_BASE_URL = "http://localhost:9999/book/update";
const BOOK_DELETE_API_BASE_URL = "http://localhost:9999/delete/";
class BookService {
    
    getBook(){
        return axios.get(BOOK_API_BASE_URL);
    }

    getBookByCategory(){
        return axios.get("http://localhost:9999/book/category/" + localStorage.getItem('selectedCategoryId'))
    }
    getBookByUserName(){
        return axios.get(BOOK_API_BASE_URL_USER);
    }
    
    updateBook(book) {
        return axios.post(BOOK_UPDATE_API_BASE_URL, book);
    }

    denyBook(id) {
        return axios.delete(BOOK_DELETE_API_BASE_URL+id);
    }

}

export default new BookService();