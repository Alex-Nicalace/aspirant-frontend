import * as axios from "axios";

const _instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:8080/api/'
})

export default class AspirantApiService {
    dictDocAPI = {
        async post(data) {
            return await _instance.post(`dict-doc`, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(`dict-doc`)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`dict-doc/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`dict-doc/${id}`)
        },
        async put(data) {
            return await _instance.put(`dict-doc`, data)
        }

    }

    userApi = {
        async checkUser() {
            return await _instance.post(`user/auth`);
        }
    }

}