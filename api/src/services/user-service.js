const jwt = require('jsonwebtoken');

class UserService {
    constructor() {
    }

    async authorized(token) {
        try {
            return jwt.verify(token, 'secret_key');
        } catch (ex) {
            return null;
        }
    }
}

module.exports = new UserService();
