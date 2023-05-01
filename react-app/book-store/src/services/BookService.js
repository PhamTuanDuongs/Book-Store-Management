
import axios from "axios";
var pageView = sessionStorage.getItem("pageView");
const BOOK_API_BASE_URL = "http://localhost:9999/book";
const BOOK_API_BASE_URL_USER = "http://localhost:9999/book/user/" + pageView;
const BOOK_UPDATE_API_BASE_URL = "http://localhost:9999/book/update";
const BOOK_DELETE_API_BASE_URL = "http://localhost:9999/delete/";
const BOOK_GET_API_BASE_URL = "http://localhost:9999/book/bookDetail/";

class BookService {
    
    getBook(){
        return axios.get(BOOK_API_BASE_URL);
    }

    getBookByCategory(){
        return axios.get("http://localhost:9999/book/category/" + localStorage.getItem('selectedCategoryId'))
    }

    getBookByBookId(){
        return axios.get("http://localhost:9999/book/bookDetail/" + localStorage.getItem('selectedBookId'))
    }

    getCreatedBy(){
        return axios.get("http://localhost:9999/book/createdBy/" + localStorage.getItem('selectedBookId'))
    }

    getBookByUserName(){
        return axios.get(BOOK_API_BASE_URL_USER);
    }
    
    updateBook(book) {
        return axios.post(BOOK_UPDATE_API_BASE_URL, book);
    }

    updateBookInformation(book, category) {
        return axios.post(BOOK_UPDATE_API_BASE_URL + "/information/"+category, book);
    }

    updateFilePdf(formData) {
        return axios.post(BOOK_UPDATE_API_BASE_URL + "/upload/pdf",formData);
    }
    updateFileCover(formData) {
        return axios.post(BOOK_UPDATE_API_BASE_URL + "/upload/cover",formData);
    }

    denyBook(id) {
        return axios.delete(BOOK_DELETE_API_BASE_URL+id);
    }
    
}

export default new BookService();