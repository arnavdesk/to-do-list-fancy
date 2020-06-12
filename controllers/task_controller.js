const Task = require("../models/task");
const db = require("../config/mongoose")

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
    var d = new Date();
    // request.body.date + "T18:29:59Z"
    console.log();
    console.log(request.body);
    request.body.state = 0;
    request.body.date = new Date(request.body.date + "T18:29:59Z");
    // const timeDiff = (request.body.date.getTime() - d.getTime()) / (60 * 60 * 24 * 1000);
    // console.log(timeDiff);
    // if (timeDiff < 0) {
    //     request.body.colorNote = "#C62828";
    // }
    // else if (timeDiff < 4) {
    //     request.body.colorNote = "#E57373";
    // }
    // else {
    //     request.body.colorNote = "white";
    // }
    Task.create(request.body, function (err, newTask) {
        if (err) {
            console.log("error in creating a task");
            return;
        }
        else {
            console.log("******New task******", newTask)
            console.log(newTask.date + " " + d);
            console.log((newTask.date.getTime() - d.getTime()) / (60 * 60 * 24 * 1000));
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

module.exports.deleteAll = function (request, response) {
    Task.deleteMany({}, function (err) {
        if (err) {
            console.log("error in deletion");
            return response.redirect('back');
        }
        else {
            return response.redirect('back');
        }
    })

}

module.exports.updateStat = function (request, response) {

    const id = request.query.id;
    const state = parseInt(request.query.state);
    console.log(id + " " + state);
    let note;

    Task.updateOne({ "_id": id }, { $set: { state: state } }, function (err) {
        if (err) {
            console.log("Error in finding user 2 2 2");
            return response.end('{ "status":"failed"}');
        }
        else {
            console.log("Updated!");
            return response.end('{ "status":"success"}');
        }
    })

}

module.exports.deleteCompleted = function (request, response) {
    Task.deleteMany({ "state": "1" }, function (err) {
        if (err) {
            console.log("error in deletion");
            return response.redirect('back');
        }
        else {
            return response.redirect('back');
        }
    })
}