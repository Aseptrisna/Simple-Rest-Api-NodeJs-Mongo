const UserModel = require("../model/user.model");
const Response = require("../const/response");
const Bcrypt = require("bcrypt");

/**
 * USer Register
 * */
exports.signup = (data) =>
  new Promise((resolve, reject) => {
    UserModel.findOne({
      email: data.email,
    }).then((user) => {
      if (user) {
        reject(Response.errorResponse("E-Mail Sudah Digunakan"));
      } else {
        Bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash;
          UserModel.create(data)
            .then(() => {
              resolve(Response.successResponse("Berhasil Registrasi Akun!!!"));
            })
            .catch(() => {
              reject(Response.errorResponse("Gagal Registrasi"));
            });
        });
      }
    });
  });

/*
  User Login
  */
exports.login = (data) =>
  new Promise((resolve, reject) => {
    UserModel.findOne({
      email: data.email,
    }).then((user) => {
      if (user) {
        if (Bcrypt.compareSync(data.password, user.password)) {
          resolve(
            Object.assign(Response.successResponse("Berhasil Login !!!!"), {
              user: user,
            })
          );
        } else {
          reject(Response.errorResponse("Password Salah"));
        }
      } else {
        reject(Response.errorResponse("E-Mail Tidak Terdaftar/Email Salah"));
      }
    });
  });
