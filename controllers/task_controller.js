const Task = require("../models/task");

module.exports.load = function (request, response) {

    Task.find({}, function (err, tasks) {
        if (err) {
            console.log("Error in fetching tasks from DB");
            return;
        }
        else {
            // console.log(contacts);
            return response.render('home', { task_list: tasks });
        }
    })
}

module.exports.add = function (request, response) {
    console.log(request.body);
    request.body.state = 0;
    Task.create(request.body, function (err, newTask) {
        if (err) {
            console.log("error in creating a task");
            return;
        }
        else {
            console.log("******New task******", newTask)
            return response.redirect("back");
        }
    });
}

module.exports.delete = function (request, response) {
    let id = request.query.id;
    console.log(id);
    Task.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log("error in deletion");
            return;
        }
        else {
            return response.redirect('back');
        }
    })
}