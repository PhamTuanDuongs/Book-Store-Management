import axios from "axios";
var pageView = sessionStorage.getItem("pageView");
const USER_API_BASE_URL = "http://localhost:9999/users/login/"+pageView;

class UserService {
    
    getUser(){
        return axios.get(USER_API_BASE_URL);
    }
    
}
export default new UserService();