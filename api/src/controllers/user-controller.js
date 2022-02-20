const UserService = require('../services/user-service');

class UserController {
    constructor() {
    }

    async authorized(req, res, next) {
        let httpHeaders = req.headers;

        if (httpHeaders.authorization) {
            let token = httpHeaders.authorization.split(' ')[1];
            let authUser = await UserService.authorized(token);

            if (authUser) {
                req.user = authUser;
                next();
            } else {
                res.status(403).send('Forbidden: Invalid token');
            }

        } else {
            res.status(403).send('Forbidden: Token not provided');
        }
    }
}

module.exports = new UserController();
