const express = require("express");
const router = express.Router();


const taskController = require("../controllers/task_controller");



router.get("/", taskController.load);

router.post("/add-task", taskController.add);

router.get("/delete-task", taskController.delete);

router.get("/delete-all", taskController.deleteAll);

module.exports = router;