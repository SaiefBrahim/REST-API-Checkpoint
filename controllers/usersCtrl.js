var UserModel = require("../models/UserModel");

exports.getUsers = (req, res, next) => {
  UserModel.find()
    .then((data) => {
      return res.status(200).json({
        success: true,
        documents: data.length,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({ err: err });
    });
};
exports.getUser = (req, res, next) => {
  UserModel.findOne({ _id: req.params.id })
    .then((data) => {
      return res.status(200).json({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({ err: err });
    });
};
exports.addUser = (req, res, next) => {
  var user = new UserModel(req.body);
  user
    .save()
    .then((data) => {
      res.status(201).json({
        success: true,
        message: "New User Created",
        data: data,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.status(403).json({ err: err });
    });
};
exports.updateUser = (req, res, next) => {
  UserModel.updateOne(
    { _id: req.params.id },
    { username: req.body.username, password: req.body.password }
  )
    .then((data) => {
      res.status(202).json({
        success: true,
        message: "_id " + req.params.id + " Updated",
        data: data,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(403).json({ err: err });
    });
};
exports.deleteUser = (req, res, next) => {
  UserModel.deleteOne({ _id: req.params.id })
    .then((data) =>
      res.status(200).json({
        success: true,
        message: "_id " + req.params.id + " Deleted",
        data: data,
      })
    )
    .catch((err) => {
      console.error(err);
      res.status(403).json({ err: err });
    });
};
