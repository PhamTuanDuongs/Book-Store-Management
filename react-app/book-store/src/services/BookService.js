
import axios from "axios";

const BOOK_API_BASE_URL = "http://localhost:9999/book";

class BookService {
    getBook(){
        return axios.get(BOOK_API_BASE_URL);
    }
}

export default new BookService();