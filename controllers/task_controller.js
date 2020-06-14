const Task = require("../models/task");
const db = require("../config/mongoose")

// This functions finds the whole list in database and then renders home.ejs
// it also sends the list to be rendered as ejs locals
// it sends additional paramets which is to tell to update layout so that 
// user can filter by sorted or unsorted

module.exports.load = function (request, response) {

    Task.find({}, function (err, tasks) {
        if (err) {
            console.log("Error in fetching tasks from DB");
            return;
        }
        else {
            // console.log(contacts);
            return response.render('home', {
                task_list: tasks
                , link_to_page_filter: "/sorted-home"
                , filter_page_name: "Sort By Deadline"
            });
        }
    })
}

// This functions finds the whole list in database and then renders home_sorted.ejs
// it also sends the list to be rendered as ejs locals
// it sends additional paramets which is to tell to update layout so that 
// user can filter by sorted or unsorted

module.exports.loadSorted = function (request, response) {

    Task.find({}, function (err, tasks) {
        if (err) {
            console.log("Error in fetching tasks from DB");
            return;
        }
        else {
            // console.log(contacts);
            return response.render('home_sorted', {
                task_list: tasks
                , link_to_page_filter: "/"
                , filter_page_name: "Sort Normally"
            });
        }
    })
}

// Adds a list in db and then goes back
// The important things to find in this is that the deadline is being converted to
// the correct time by adding 18:29:59 because default is 05:30:00
// it also adds a parameter state in the list item which indicates that either
// the task is completed or not

module.exports.add = function (request, response) {
    var d = new Date();
    // request.body.date + "T18:29:59Z"
    console.log();
    console.log(request.body);
    request.body.state = 0;
    request.body.date = new Date(request.body.date + "T18:29:59Z");

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

// Queries on the basis of id passed by view db and deletes the item.

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

// Deletes all items unconditionally

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

// Delete only those items whose state is 1 (ie completed)

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

// Queries db using id and updates state given by query param
//  and return a json object about success of thhe

module.exports.updateStat = function (request, response) {

    const id = request.query.id;
    const state = parseInt(request.query.state);
    console.log(id + " " + state);
    let note;

    Task.updateOne({ "_id": id }, { $set: { state: state } }, function (err) {
        if (err) {
            console.log("Error in finding user!!!!");
            return response.end('{ "status":"failed"}');
        }
        else {
            console.log("Updated!");
            return response.end('{ "status":"success"}');
        }
    })

}