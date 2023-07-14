const { Jenis_Pelanggaran } = require('../models')

class JenisPelanggarans {
  static getListJenisPelanggaran(req:any, res:any, next:any) {
    Jenis_Pelanggaran.findAll({
      order: [
        [ 'id', 'ASC']
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

module.exports = JenisPelanggarans