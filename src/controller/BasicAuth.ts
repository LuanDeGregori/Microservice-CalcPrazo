import { FindUser } from './UserController'
const bcrypt = require('bcrypt')
import { Error } from '../models/Errors'
var logger = require('../services/logger.js');

async function _authenticate({ username, password }) {
    const user = await FindUser(username)

    if(!user){
        return false
    }

    if (await bcrypt.compare(password, user.password)){
        return true
    }

}

module.exports = async (req, res, next) => {

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json(new Error().model(401,'Missing Authorization Header'));
    }

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await _authenticate({ username, password });
    if (!user) {
        logger.info("Invalid Authentication for " + username);
        return res.status(401).json(new Error().model(401,'Invalid Authentication Credentials'));
    }

    next();
}