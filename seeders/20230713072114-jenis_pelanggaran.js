'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jenis_Pelanggarans', [{
      pelanggaran: 'Terlambat masuk/ mengikuti Literasi setelah bel berbunyi',
      jenis_pelanggaran: 'Keterlambatan',
      kode: 'A1',
      score: 2
    },{
      pelanggaran: 'Terlambat mengikuti upacara bendera',
      jenis_pelanggaran: 'Keterlambatan',
      kode: 'A2',
      score: 2
    },{
      pelanggaran: 'Terlambat masuk kelas setelah jam istirahat',
      jenis_pelanggaran: 'Keterlambatan',
      kode: 'A3',
      score: 2
    },{
      pelanggaran: 'Tidak masuk tanpa keterangan/ tanpa surat dari orang tua/ wali',
      jenis_pelanggaran: 'Kehadiran',
      kode: 'B1',
      score: 3
    },{
      pelanggaran: 'Tidak masuk dengan keterangan palsu',
      jenis_pelanggaran: 'Kehadiran',
      kode: 'B2',
      score: 10
    },{
      pelanggaran: 'Keluar pada jam pelajaran tanpa izin',
      jenis_pelanggaran: 'Kehadiran',
      kode: 'B3',
      score: 2
    },{
      pelanggaran: "Tidak ikut program sekolah (Literasi, Senam, Program Jum'at dll)",
      jenis_pelanggaran: 'Kehadiran',
      kode: 'B4',
      score: 2
    },{
      pelanggaran: "Tidak mengikuti kegiatan ekskul wajib tanpa keterangan",
      jenis_pelanggaran: 'Kehadiran',
      kode: 'B6',
      score: 2
    },{
      pelanggaran: "Tidak memakai seragam dan atribut sekolah lengkap sesuai ketentuan (topi, ikat pinggang, bed lokasi, nama dada, atau kaos kaki berlogo) / item",
      jenis_pelanggaran: 'Pakaian',
      kode: 'C1',
      score: 2
    },{
      pelanggaran: "Memakai seragam tidak rapi/ tidak sesuai ketentuan",
      jenis_pelanggaran: 'Pakaian',
      kode: 'C2',
      score: 3
    },{
      pelanggaran: "Tidak mengenakan topi atau atribut tidak lengkap pada waktu mengikuti upacara / item",
      jenis_pelanggaran: 'Pakaian',
      kode: 'C3',
      score: 3
    },{
      pelanggaran: "Memakai seragam olah raga pada waktu mengikuti KBM bukan Penjaskes",
      jenis_pelanggaran: 'Pakaian',
      kode: 'C5',
      score: 5
    },{
      pelanggaran: "Memakai pakaian tembus pandang/ketat (jankis dan baggy)",
      jenis_pelanggaran: 'Pakaian',
      kode: 'C6',
      score: 5
    },{
      pelanggaran: "Memakai jaket/rompi/sweater/hem dilingkungan sekolah, kecuali sakit dengan keterangan dokter atau orang tua",
      jenis_pelanggaran: 'Pakaian',
      kode: 'C7',
      score: 3
    },{
      pelanggaran: "Berhias berlebihan bagi putri dan rambut diurai apabila rambut melewati bahu",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D1',
      score: 2
    },{
      pelanggaran: "Memakai gelang, kalung, aksesoris yang berlebihan",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D2',
      score: 3
    },{
      pelanggaran: "Rambut dipotong tapi tidak rapi",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D3',
      score: 3
    },{
      pelanggaran: "Siswa putra rambut menutup kerah kemeja/telinga",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D4',
      score: 5
    },{
      pelanggaran: "Rambut dicat atau memakai pomade berwarna",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D5',
      score: 5
    },{
      pelanggaran: "Berkuku panjang",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D6',
      score: 3
    },{
      pelanggaran: "Kuku diwarnai/dicat",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D7',
      score: 5
    },{
      pelanggaran: "Tidak memakai sepatu hitam sekolah jenis NB",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D8',
      score: 5
    },{
      pelanggaran: "Memakai sandal pada saat hadir ke sekolah, KBM atau pulang sekolah",
      jenis_pelanggaran: 'Kerapian',
      kode: 'D9',
      score: 3
    },{
      pelanggaran: "Siswa masuk kelas lain tanpa seizin guru di dalam kelas",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E1',
      score: 5
    },{
      pelanggaran: "Memalsukan dokumen atau sejenisnya",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E2',
      score: 25
    },{
      pelanggaran: "Memalsukan tanda tangan orang tua/wali siswa",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E3',
      score: 25
    },{
      pelanggaran: "Memalsukan tanda tangan guru/karyawan sekolah",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E4',
      score: 50
    },{
      pelanggaran: "Memalsukan tanda tangan kepala sekolah dan pejabat lain",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E5',
      score: 75
    },{
      pelanggaran: "Berbohong pada orang tua/guru dalam segala hal",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E6',
      score: 20
    },{
      pelanggaran: "Melawan orang tua/guru dalam bentuk kata-kata",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E7',
      score: 20
    },{
      pelanggaran: "Melakukan penipuan dalam bentuk apapun yang berakibat merugikan E8 50 orang lain",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E8',
      score: 50
    },{
      pelanggaran: "Mencuri",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E9',
      score: 60
    },{
      pelanggaran: "Mengeluarkan kata-kata tidak senonoh sesama siswa",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E10',
      score: 7
    },{
      pelanggaran: "Mengeluarkan kata-kata tidak senonoh terhadap guru/ karyawan/ kepala sekolah",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E11',
      score: 25
    },{
      pelanggaran: "Berpacaran di lingkungan sekolah (berduaan, berpegangan tangan, berpelukan, berciuman, dll)",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E12',
      score: 30
    },{
      pelanggaran: "Berpacaran di luar sekolah (berduaan, berpegangan tangan, berpelukan, berciuman, dll) dan terekspose di media sosial",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E13',
      score: 40
    },{
      pelanggaran: "Melakukan pelecehan seksual (secara fisik, verbal dan non verbal) terhadap warga sekolah",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E14',
      score: 100
    },{
      pelanggaran: "Menikah/hamil/menghamili",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E15',
      score: 100
    },{
      pelanggaran: "“Nongkrong”di warung/mal/supermarket/warnet/ game centre dengan memakai seragam sekolah saat jam KBM",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E16',
      score: 50
    },{
      pelanggaran: "“Nongkrong”di warung/mal/supermarket/warnet/ game centre dengan memakai seragam sekolah di luar jam sekolah",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E17',
      score: 50
    },{
      pelanggaran: "Siswa putra bertindik",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E18',
      score: 50
    },{
      pelanggaran: "Bertato",
      jenis_pelanggaran: 'Kepribadian',
      kode: 'E19',
      score: 50
    },{
      pelanggaran: "Tidak membawa buku literasi sesuai ketentuan",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F1',
      score: 2
    },{
      pelanggaran: "Tidak melaksanakan tugas Piket Kebersihan Kelas",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F2',
      score: 2
    },{
      pelanggaran: "Tidak tertib pada waktu mengikuti upacara/apel",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F3',
      score: 3
    },{
      pelanggaran: "Keluar kelas pada saat pergantian jam pelajaran, kecuali seizin guru atau untuk kepentingan pemanggilan pengurus kelas",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F4',
      score: 3
    },{
      pelanggaran: "Tidak mengikuti upacara Peringatan Hari Besar Nasional (PHBN) tanpa izin tertulis",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F5',
      score: 10
    },{
      pelanggaran: "Membawa tip ex cair",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F6',
      score: 2
    },{
      pelanggaran: "Mengotori, mencoret-coret, dan merusak sarana dan prasarana sekolah",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F7',
      score: 25
    },{
      pelanggaran: "Mengotori, mencoret-coret, dan merusak/membakar barang milik teman/guru/karyawan",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F8',
      score: 50
    },{
      pelanggaran: "Membuat kegaduhan di dalam kelas pada saat KBM berlangsung",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F9',
      score: 10
    },{
      pelanggaran: "Bertengkar/berkelahi dengan teman di dalam atau di luar kelas",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F10',
      score: 25
    },{
      pelanggaran: "Menyalahgunakan HP/Laptop dan Jam Android ketika kegiatan literasi, IMTAQ, dan KBM",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F11',
      score: 25
    },{
      pelanggaran: "Menyalahgunakan HP dan Jam Android ketika kegiatan ujian",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F12',
      score: 25
    },{
      pelanggaran: "Menggunakan HP/Laptop ketika jam istirahat dan mandiri",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F13',
      score: 10
    },{
      pelanggaran: "Mencharger HP/Laptop di sekolah tanpa ijin guru",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F14',
      score: 10
    },{
      pelanggaran: "Membeli makanan/minuman dan kebutuhan lain di luar lingkungan sekolah",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F15',
      score: 3
    },{
      pelanggaran: "Membawa makanan/minuman berkemasan plastik",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F16',
      score: 3
    },{
      pelanggaran: "Membawa alat makan dari kantin ke dalam kelas",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F17',
      score: 3
    },{
      pelanggaran: "Membuang sampah tidak pada tempatnya",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F18',
      score: 3
    },{
      pelanggaran: "Melakukan kegiatan olah raga di luar jam pelajaran olah raga (misalkan sepak bola, voli, dan lain-lain)",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F19',
      score: 10
    },{
      pelanggaran: "Melompati pagar sekolah untuk masuk/keluar",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F20',
      score: 25
    },{
      pelanggaran: "Tidak memarkir sepeda sesuai ketentuan",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F21',
      score: 3
    },{
      pelanggaran: "Mengendarai sepeda motor ke sekolah dan/ mengendarai sepeda motor berseragam sekolah",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F22',
      score: 25
    },{
      pelanggaran: "Terlambat mengembalikan buku Tatib yang harus ditandatangani Wali Kelas & orang tua/wali setelah melakukan pelanggaran / hari",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F23',
      score: 2
    },{
      pelanggaran: "Menghilangkan buku Tatib",
      jenis_pelanggaran: 'Ketertiban',
      kode: 'F24',
      score: 50
    },{
      pelanggaran: "Membawa rokok jenis apapun ke dalam sekolah",
      jenis_pelanggaran: 'Merokok',
      kode: 'G1',
      score: 30
    },{
      pelanggaran: "Menghisap rokok jenis apapun di dalam sekolah/ sekitar sekolah",
      jenis_pelanggaran: 'Merokok',
      kode: 'G2',
      score: 40
    },{
      pelanggaran: "Membawa dan menghisap rokok jenis apapun di dalam sekolah/ sekitar sekolah",
      jenis_pelanggaran: 'Merokok',
      kode: 'G3',
      score: 60
    },{
      pelanggaran: "Menghisap rokok jenis apapun di luar sekolah dan terekspose di media sosial",
      jenis_pelanggaran: 'Merokok',
      kode: 'G4',
      score: 30
    },{
      pelanggaran: "Membawa buku, majalah, stensil, kaset, CD/ VCD, file dan film serta foto porno di lingkungan sekolah",
      jenis_pelanggaran: 'Pornografi',
      kode: 'H1',
      score: 30
    },{
      pelanggaran: "Menjual belikan buku, majalah, stensil, CD/ VCD dan foto porno di lingkungan sekolah",
      jenis_pelanggaran: 'Pornografi',
      kode: 'H2',
      score: 50
    },{
      pelanggaran: "Melihat foto, isi kaset, file, film serta VCD porno di lingkungan sekolah",
      jenis_pelanggaran: 'Pornografi',
      kode: 'H3',
      score: 30
    },{
      pelanggaran: "Membawa senjata tajam/ api tanpa izin",
      jenis_pelanggaran: 'Senjata Tajam',
      kode: 'I1',
      score: 75
    },{
      pelanggaran: "Memperjual belikan senjata tajam/ api",
      jenis_pelanggaran: 'Senjata Tajam',
      kode: 'I2',
      score: 75
    },{
      pelanggaran: "Menggunakan senjata tajam/api untuk melukai orang lain",
      jenis_pelanggaran: 'Senjata Tajam',
      kode: 'I3',
      score: 100
    },{
      pelanggaran: "Membawa, memakai, mengedarkan minuman keras/ narkoba di sekolah",
      jenis_pelanggaran: 'Narkoba dan Minuman Keras',
      kode: 'J1',
      score: 100
    },{
      pelanggaran: "Membawa, memakai, mengedarkan minuman keras/ narkoba di luar sekolah",
      jenis_pelanggaran: 'Narkoba dan Minuman Keras',
      kode: 'J2',
      score: 75
    },{
      pelanggaran: "Berkelahi/ tawuran dengan siswa sekolah lain secara langsung maupun tidak langsung",
      jenis_pelanggaran: 'Berkelahi/ Tawuran',
      kode: 'K1',
      score: 75
    },{
      pelanggaran: "Berkelahi/ tawuran dengan teman satu sekolah secara langsung maupun tidak langsung",
      jenis_pelanggaran: 'Berkelahi/ Tawuran',
      kode: 'K2',
      score: 50
    },{
      pelanggaran: "Menggunakan nama orang tua untuk mengolok-olok teman",
      jenis_pelanggaran: 'Perundungan dan Intimidasi',
      kode: 'L1',
      score: 10
    },{
      pelanggaran: "Melakukan tindakan perundungan/pem-bully-an terhadap warga sekolah",
      jenis_pelanggaran: 'Perundungan dan Intimidasi',
      kode: 'L2',
      score: 25
    },{
      pelanggaran: "Merekam orang lain dalam bentuk foto/suara/video tanpa seizin yang bersangkutan dan merugikan secara moral dan kesusilaan",
      jenis_pelanggaran: 'Perundungan dan Intimidasi',
      kode: 'L3',
      score: 25
    },{
      pelanggaran: "Mengancam sesama siswa",
      jenis_pelanggaran: 'Perundungan dan Intimidasi',
      kode: 'L4',
      score: 15
    },{
      pelanggaran: "Mengancam guru/karyawan/kepala sekolah",
      jenis_pelanggaran: 'Perundungan dan Intimidasi',
      kode: 'L5',
      score: 30
    },{
      pelanggaran: "Mengancam, menganiaya, memprovokasi untuk melawan sesama teman",
      jenis_pelanggaran: 'Perundungan dan Intimidasi',
      kode: 'L6',
      score: 50
    },{
      pelanggaran: "Mengancam, menganiaya, memprovokasi untuk melawan kepala sekolah, guru, dan karyawan",
      jenis_pelanggaran: 'Perundungan dan Intimidasi',
      kode: 'L7',
      score: 100
    },{
      pelanggaran: "Mengganggu teman yang sedang menjalankan ibadah",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M1',
      score: 10
    },{
      pelanggaran: "Mengejek atau mengintimidasi teman yang berbeda agama",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M2',
      score: 25
    },{
      pelanggaran: "Tidak mengikuti kegiatan Peringatan Hari Besar Agama (PHBA) tanpa izin tertulis",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M3',
      score: 10
    },{
      pelanggaran: "Tidak membawa Juz Amma/Kitab suci pada saat kegiatan mengaji",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M4',
      score: 3
    },{
      pelanggaran: "Tidak mengikuti kegiatan ibadah sesuai agama yang dianut",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M5',
      score: 5
    },{
      pelanggaran: "Tidak mengenakan sandal saat kegiatan solat berjamaah di masjid",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M6',
      score: 3
    },{
      pelanggaran: "Tidak beralas kaki saat kegiatan sholat berjamaah di masjid",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M7',
      score: 5
    },{
      pelanggaran: "Tidak menggunakan pakaian sesuai ketentuan pada saat kegiatan PHBI",
      jenis_pelanggaran: 'Ibadah',
      kode: 'M8',
      score: 5
    }], {});
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jenis_Pelanggarans', null, {});
  }
};
