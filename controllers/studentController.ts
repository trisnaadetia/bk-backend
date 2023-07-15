const { Student } = require('../models')

class StudentControllers {
  static getListStudent(req:any, res:any, next:any) {
    Student.findAll({
      order: [
        [ 'id', 'ASC' ]
      ]
    })
    .then((result:any) => {
      res.status(200).json({ status: 200, data: result })
    })
    .catch((error:any) => {
      next(error)
    })
  }
}

module.exports = StudentControllers