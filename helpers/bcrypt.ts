const bcrypt = require('bcrypt')

function hashPassword(password:string) {
    return bcrypt.hashSync(password, 8)
}

function comparePassword(password:string, encryptedPassword:string) {
    return bcrypt.compareSync(password, encryptedPassword)
}

module.exports = { hashPassword, comparePassword }