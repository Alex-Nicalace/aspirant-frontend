import * as axios from "axios";

const _instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:8080/api/'
})

const _pathDictDocAPI = 'dict-doc';
const _pathDictCountryAPI = 'dict-country';
const _pathDictEducationLevelAPI = 'dict-education-level';
const _pathDictCityAPI = 'dict-city';

export default class AspirantApiService {
    userApi = {
        async checkUser() {
            return await _instance.post(`user/auth`);
        }
    }

    dictDocAPI = {
        async post(data) {
            return await _instance.post(_pathDictDocAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictDocAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictDocAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictDocAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictDocAPI, data)
        }

    }

    dictCountryAPI = {
        async post(data) {
            return await _instance.post(_pathDictCountryAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictCountryAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictCountryAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictCountryAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictCountryAPI, data)
        }
    }

    dictEducationLevelAPI = {
        async post(data) {
            return await _instance.post(_pathDictEducationLevelAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictEducationLevelAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictEducationLevelAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictEducationLevelAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictEducationLevelAPI, data)
        }
    }

    dictCityAPI = {
        async post(data) {
            return await _instance.post(_pathDictCityAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictCityAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictCityAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictCityAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictCityAPI, data)
        }
    }

}