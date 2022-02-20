const catchErrors = fn => (req, res, next) => {
    fn(req,res).catch((error) => next(error));
};

module.exports = catchErrors;
