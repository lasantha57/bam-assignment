const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
class UserService {
    constructor() {
    }

    async authorized(token) {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (ex) {
            return null;
        }
    }
}

module.exports = new UserService();
