const { AppError } = require('../utils/error-handler');
const { BASE_URI } = require('../config/config');
const fetch = require('node-fetch');

class CharacterService {
    constructor() {
    }

    async search(queryParams) {

        let url = `${BASE_URI}/character?`;

        for (let key in queryParams) {
            const value = queryParams[key];
            url = `${url}&${key}=${value}`;
        }

        try {
            const apiResponse = await fetch(url, { headers: { 'Authorization': 'Bearer ZhYtzsxQGxgdabJAodjX' } })
            const apiResponseJson = await apiResponse.json()
            return apiResponseJson.docs;
        } catch (error) {
            throw new AppError(500, `Unable to fetch records - ${error}`)
        }
    }

    async getById(id) {
        try {
            const apiResponse = await fetch(`${BASE_URI}/character/${id}`, { headers: { 'Authorization': 'Bearer ZhYtzsxQGxgdabJAodjX' } })
            const apiResponseJson = await apiResponse.json()
            return apiResponseJson.docs;
        } catch (error) {
            throw new AppError(500, `Unable to fetch record - ${error}`)
        }
    }
}

module.exports = new CharacterService();
