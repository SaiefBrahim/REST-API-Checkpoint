var express = require("express");
var router = express.Router();
var userCtrl = require("../controllers/usersCtrl");

/* GET users listing. */
router.get("/", userCtrl.getUsers);
router.get("/:id", userCtrl.getUser);
router.post("/", userCtrl.addUser);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;
