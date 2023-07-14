const expressApp = require('express')
const route = expressApp.Router()
const authentication = require('../middlewares/authentication')
const UserController = require('../controllers/userController')
const JenisPelanggaranController = require('../controllers/jenisPelanggaran')

route.post('/register', UserController.register)
route.post('/login', UserController.login)

route.get('/jenis_pelanggaran', authentication, JenisPelanggaranController.getListJenisPelanggaran)

module.exports = route