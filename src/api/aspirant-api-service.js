import * as axios from "axios";

const _instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:8080/api/'
})

const _pathDictDocAPI = 'dict-doc';
const _pathDictCountryAPI = 'dict-country';
const _pathDictEducationLevelAPI = 'dict-education-level';
const _pathDictCityAPI = 'dict-city';
const _pathDictStreetAPI = 'dict-street';
const _pathDictContactTypeAPI = 'dict-contact-type';
const _pathDictSubjectAPI = 'dict-subject';
const _pathDictEducationFormAPI = 'dict-education-form';
const _pathDictCertificationResultAPI = 'dict-certification-result';
const _pathDictEnterpriseAPI = 'dict-enterprise';
const _pathDictEnterpriseAsTreeAPI = 'dict-enterprise-as-tree';

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

    dictStreetAPI = {
        async post(data) {
            return await _instance.post(_pathDictStreetAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictStreetAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictStreetAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictStreetAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictStreetAPI, data)
        }
    }

    dictContactTypeAPI = {
        async post(data) {
            return await _instance.post(_pathDictContactTypeAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictContactTypeAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictContactTypeAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictContactTypeAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictContactTypeAPI, data)
        }
    }

    dictSubjectAPI = {
        async post(data) {
            return await _instance.post(_pathDictSubjectAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictSubjectAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictSubjectAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictSubjectAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictSubjectAPI, data)
        }
    }

    dictEducationFormAPI = {
        async post(data) {
            return await _instance.post(_pathDictEducationFormAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictEducationFormAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictEducationFormAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictEducationFormAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictEducationFormAPI, data)
        }
    }

    dictCertificationResultAPI = {
        async post(data) {
            return await _instance.post(_pathDictCertificationResultAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictCertificationResultAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictCertificationResultAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictCertificationResultAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictCertificationResultAPI, data)
        }
    }

    dictEnterpriseAPI = {
        async post(data) {
            return await _instance.post(_pathDictEnterpriseAPI, data)
            //.then(response => response.data)
        },
        async getAll() {
            return await _instance.get(_pathDictEnterpriseAPI)
            //.then(response => response.data)
        },
        async getOne(id) {
            return await _instance.get(`${_pathDictEnterpriseAPI}/${id}`)
            //.then(response => response.data)
        },
        async delete(id) {
            return await _instance.delete(`${_pathDictEnterpriseAPI}/${id}`)
        },
        async put(data) {
            return await _instance.put(_pathDictEnterpriseAPI, data)
        }
    }

    dictEnterpriseAsTreeAPI = {
        async getTreeAll() {
            return await _instance.get(_pathDictEnterpriseAsTreeAPI)
            //.then(response => response.data)
        },
        async getTreeBranch(id) {
            return await _instance.get(`${_pathDictEnterpriseAsTreeAPI}/${id}`)
            //.then(response => response.data)
        },
    }

}