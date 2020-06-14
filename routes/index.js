const express = require("express");
const router = express.Router();

// Require task controller as it controlls rendring and passing data
// Refer to task_controller for understainding more
const taskController = require("../controllers/task_controller");


// route to display the home page which has list and everything
router.get("/", taskController.load);

// route to display the home page which has Sorted list by deadline and everything
router.get("/sorted-home", taskController.loadSorted);

// Route to add task
router.post("/add-task", taskController.add);

// Route to delete a single task
router.get("/delete-task", taskController.delete);

// Route to delete all items in list(db)
router.get("/delete-all", taskController.deleteAll);

// Route to update  state of list item from (db) from completed to not and vice versa.
router.get("/update-state", taskController.updateStat);

// Route to delete only completed items
router.get("/delete-completed", taskController.deleteCompleted)

module.exports = router;