import axios from "axios";
var pageView = sessionStorage.getItem("pageView");
const USER_API_BASE_URL = "http://localhost:9999/users/login/"+pageView;
const USER_ALL_API_BASE_URL = "http://localhost:9999/users";
const USER_UPDATE_API_BASE_URL = "http://localhost:9999/users/update";
const USER_BASE_REST_API_URL = "http://localhost:9999/users/avatar/update"

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

    updateUserAvatar(formData){
        return axios.post(USER_BASE_REST_API_URL,formData)
    }
    
}
export default new UserService();