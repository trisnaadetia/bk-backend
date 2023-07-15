const expressApp = require('express')
const route = expressApp.Router()
const authentication = require('../middlewares/authentication')
const UserController = require('../controllers/userController')
const JenisPelanggaranController = require('../controllers/jenisPelanggaranController')
const StudentController = require('../controllers/studentController')

route.post('/register', UserController.register)
route.post('/login', UserController.login)

route.get('/jenis_pelanggaran', authentication, JenisPelanggaranController.getListJenisPelanggaran)

route.get('/list_student', authentication, StudentController.getListStudent)

module.exports = route