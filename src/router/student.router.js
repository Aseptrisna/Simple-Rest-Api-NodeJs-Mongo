const express = require("express");
const router = express.Router();
const StudentController=require("../controller/student.controller")
router.post("/add", (req, res) => {
    StudentController.add(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  });
  router.get("/get", (req, res) => {
    StudentController.getstudent(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  });
  router.delete("/delete/:id", StudentController.delete);
  router.put("/update/:id", StudentController.update);

module.exports = router;