import axios from "axios";
var pageView = sessionStorage.getItem("pageView");
const USER_API_BASE_URL = "http://localhost:9999/users/login/"+pageView;
const USER_ALL_API_BASE_URL = "http://localhost:9999/users";
const USER_UPDATE_API_BASE_URL = "http://localhost:9999/users/update";


class UserService {
    
    getUser(){
        return axios.get(USER_API_BASE_URL);
    }
    
    getAllUser(){
        return axios.get(USER_ALL_API_BASE_URL);
    }

    updateUser(user) {
        return axios.post(USER_UPDATE_API_BASE_URL, user);
    }
}
export default new UserService();