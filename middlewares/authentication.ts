const { verifyToken } = require('../helpers/jwt')
const { User:authUser } = require('../models')

function authenticate(req:any, res:any, next:any) {
    let { access_token } = req.headers
    if(access_token) {
        let decoded = verifyToken(access_token)
        authUser.findOne({
            where: {
                email: decoded.email
            }
        })
        .then((result:any) => {
            if(result) {
                req.loggedUser = {
                    id: result.id,
                    email: result.email,
                }
                next()
            } else {
                next({ name: 'invalid token' })
            }
        })
        .catch((error:any) => {
            next(error)
        })
        
    } else {
        next({ name: 'required access_token' })
    }
}

module.exports = authenticate