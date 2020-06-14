const express = require("express");
const router = express.Router();


const taskController = require("../controllers/task_controller");



router.get("/", taskController.load);

router.get("/sorted-home", taskController.loadSorted);

router.post("/add-task", taskController.add);

router.get("/delete-task", taskController.delete);

router.get("/delete-all", taskController.deleteAll);

router.get("/update-state", taskController.updateStat);

router.get("/delete-completed", taskController.deleteCompleted)

module.exports = router;