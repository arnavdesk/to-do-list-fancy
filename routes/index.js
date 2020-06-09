const express = require("express");
const router = express.Router();


const taskController = require("../controllers/task_controller");





router.get("/", taskController.load);

router.post("/add-contact", taskController.add);

router.get("/delete-contact", taskController.delete);

module.exports = router;