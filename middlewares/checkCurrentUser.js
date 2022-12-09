const jwt = require('jsonwebtoken');

const checkCurrentUser = (req, res, next) => {
    const authorization = req.header('authorization');

    if (!authorization) {
        req.user = null;
        next();
    } else {
        const token = authorization.replace('Bearer ', '');

        try {
            const { userId } = jwt.verify(token, process.env.APP_SECRET);
            req.user = { userId };
            next();
        } catch (error) {
            res.user = null;
            next();
        }
    }
}

module.exports = checkCurrentUser;