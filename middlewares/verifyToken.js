const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authorization = req.header('authorization');

    if (!authorization) {
        // error unauthorized
        const err = new Error('Unauthorized! Please login');
        err.statusCode = 401
        next(err);
        return;
    }

    const token = authorization.replace('Bearer', '').trim();
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.user = { userId };
    next();
}

module.exports = verifyToken;