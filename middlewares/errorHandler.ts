function errorHandlers(err:any, req:any, res:any, next:any) {
    if(err.name === 'invalid token') {
        res.status(401).json({ status:401, message: 'invalid token' })
    } else if(err.name === 'required access_token') {
        res.status(401).json({ status:401, message: 'required access_token' })
    } else if(err.name === 'error not found') {
        res.status(404).json({ status:404, message: 'error not found' })
    } else if(err.name === 'unauthorized') {
        res.status(401).json({ status:401, message: 'unauthorized' })
    } else if(err.name === 'invalid password or email') {
        res.status(400).json({ status:400, message: 'invalid password or email' })
    } else if(err.name === 'invalid password') {
        res.status(400).json({ status:400, message: 'invalid password' })
    } else if(err.name === 'email and password must be required') {
        res.status(400).json({ status:400, message: 'email and password must be required' })
    } else if(err.name === 'SequelizeValidationError') {
        let listError : string[] = [] 
        err.errors.forEach((element:any) => {
            listError.push(element.message)
        })
        res.status(400).json({ status:400, message: listError })

    } else {
        res.status(500).json({ status:500, message: err.message || 'internal server error' })
    }
}

module.exports = errorHandlers