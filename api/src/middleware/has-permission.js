module.exports = (permission) => {
    return (req, res, next) => {

        if (req.user.permissions.indexOf(permission) === -1) {
            return res.status(403).json({
                statusCode: 403,
                error: 'Forbidden',
                message: 'Permission denied'
            });
        }

        next();
    };
};
