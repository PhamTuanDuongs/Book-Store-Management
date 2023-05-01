import axios from "axios";

const CATEGORY_API_BASE_URL = "http://localhost:9999/category";

class CategoryService {
    getCategory(){
        return axios.get(CATEGORY_API_BASE_URL);
    }

    getCategoryByBookId(){
        return axios.get(CATEGORY_API_BASE_URL+"/"+ localStorage.getItem('selectedBookId'));
    }
}

export default new CategoryService();