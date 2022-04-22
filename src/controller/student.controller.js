const StudentModel = require("../model/student.model");
const Response = require("../const/response");

// add data student
exports.add = (data) =>
  new Promise((resolve, reject) => {
    StudentModel.create(data)
      .then(() => resolve(Response.successResponse("Berhasil Menambah Data")))
      .catch(() => reject(Response.errorResponse("Gagal Menambah Data")));
  });
// get student
exports.getstudent = (data) =>
  new Promise((resolve, reject) => {
    StudentModel.find().then((data) => {
      if (data) {
        resolve(
          Object.assign(Response.successResponse("Berhasil"), {
            data: data,
          })
        );
      } else {
        reject(Response.errorResult());
      }
    });
  });
//   Hapus student
exports.delete = async (req, res) => {
  try {
    await StudentModel.findOneAndDelete({ _id: req.params.id });
    res.json(Response.successResponse("Berhasil Menghapus Data"));
  } catch (error) {
    res.json(Response.errorResponse("Gagal Menghapus Data"));
  }
};

//   update student
exports.update = async (req, res) => {
  try {
    await StudentModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        nama: req.body.nama,
        email: req.body.email,
        npm: req.body.npm,
        telp: req.body.telp,
        jurusan: req.body.jurusan,
        jeniskelamin: req.body.jeniskelamin,
      }
    );
    res.json(Response.successResponse("Berhasil Update Data "));
  } catch (error) {
    res.json(Response.errorResponse("Gagal Update Data "));
  }
};
