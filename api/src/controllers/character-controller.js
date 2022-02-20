const CharacterService = require('../services/character-service');
const { AppError } = require('../utils/error-handler');
const ValidationHelper = require('../utils/validation');

class CharacterController {
    constructor() {
    }

    async search(req, res, next) {
        const queryParams = req.query;

        try {
            const results = await CharacterService.search(queryParams);
            res.json(results);
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    async getById(req, res, next) {
        const id = req.params.id;

        try {
            if (ValidationHelper.isNotNullOrEmpty(id)) {
                throw new AppError(400, 'missing required url parameter id');
            }
            const results = await CharacterService.getById(id);
            res.json(results);
        } catch (error) {
            next(error)
        }
    }

}

module.exports = new CharacterController();
