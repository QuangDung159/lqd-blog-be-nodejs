const { resBuilder, handleColumnName } = require("../utils/helper");

const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    // Duplication
    if (err.code === 11000) {
        err.statusCode = 400;
        for (let p in err.keyValue) {
            const colName = handleColumnName(p);
            err.message = [`${colName}already exist`];
        }
    }

    // ObjectId not found
    if (err.kind === 'ObjectId') {
        err.statusCode = 404;
        err.message = [`The ${req.originalUrl} is not found because of wrong id`]
    }

    // Validation
    if (err.errors) {
        err.statusCode = 400;
        err.message = [];
        for (let p in err.errors) {
            err.message.push(err.errors[p].properties.message);
        }
    } else {
        err.message = [err.message];
    }

    const response = resBuilder('fail', {}, err.message);
    res.status(err.statusCode).json(response);
};

module.exports = errorHandler;