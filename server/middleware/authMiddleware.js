const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { kUnauthorized } = require('../constants/constants')

module.exports = (req, res, next) => {
    const bearerToken = req.headers['authorization']
    try {
        if (typeof bearerToken != "undefined") {
            const token = bearerToken.split(' ')[1]
            if (token) {
                req.token = token
                jwt.verify(token, config.authentication.jwtSecret, (error, user) => {
                    if (error) {
                        throw new Error(error)
                    } else {
                        req.session.user = user
                        next()
                    }
                })
            } else {
                throw new Error()
            }
        } else {
            throw new Error()
        }
    } catch (error) {
        res.status(401).send({
            error: kUnauthorized,
        })
    }
}