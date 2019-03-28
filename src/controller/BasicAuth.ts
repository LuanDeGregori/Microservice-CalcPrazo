import { FindUser } from './UserController'
const bcrypt = require('bcrypt')

async function _authenticate({ username, password }) {
    const user = await FindUser(username)

    if (await bcrypt.compare(password, user.password)){
        return true
    }

}

module.exports = async (req, res, next) => {

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    const user = await _authenticate({ username, password });
    console.log('user ' + user)
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    next();
}