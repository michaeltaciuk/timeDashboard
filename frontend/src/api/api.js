import axios from "axios";
import { updateUser } from "../../../backend/users";

const url = "http://localhost:3000";

axios.defaults.baseURL = `${url}/api`;

const api = {
    getUserData(email) {
        return axios.get(`/user/${email}`);
    },
    createUser(userData) {
        return axios.post("/user/new", userData);
    },
    updateUser(userData) {
        return axios.put(`/user/${userData.email}`, userData);
    },
    deleteUser(email) {
        return axios.delete(`/user/${email}`);
    }
};

export default api;