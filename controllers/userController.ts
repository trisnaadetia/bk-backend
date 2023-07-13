const  { User } = require('../models')
const { comparePassword:comparePasswordJWT } = require('../helpers/bcrypt')
const { generateToken:generateTokenJWT } = require('../helpers/jwt')

class UserControllers {
  static register(req:any, res:any, next:any) {
    const { userName, email, password } = req.body

    User.create({
      userName,
      email,
      password
    })
    .then((result:any) => {
      res.status(201).json({
        status: 201,
        data: {
          username: result.username,
          email: result.email,
        },
        message: 'success create user'
      })
    })
    .catch((error:any) => {
        next(error)
    })
  }

  static login(req:any, res:any, next:any) {
    const { email, password } = req.body

    if (!email.length && !password.length ) {
      next({ name: 'email and password must be required' })
    } else {
      User.findOne({
        where: { email }
      })
      .then((result:any) => {
        if(!result) {
            next({ name: 'invalid password or email' })
        } else {
            const isPasswordMatch = comparePasswordJWT(password, result.password)

            if(!isPasswordMatch) {
                next({ name: 'invalid password' })
            } else {
                const token = generateTokenJWT({
                    id: result.id,
                    email: result.email
                })
                res.status(200).json({ 
                    status: 200, 
                    data: {
                      email: result.email, 
                      access_token: token
                    }
                })
              }
            }
          })
        .catch((error:any) => {
            next(error)
        })
    }
  }
}

module.exports = UserControllers