(function () {

    // import only essential items 

    const datePicker = document.getElementById("due-date");
    const taskContainer = document.getElementsByClassName("task-container")[0];
    const infoBtn = document.getElementById("info-btn");
    const informationLeaf = document.getElementsByClassName("information-leaf")[0];
    const deleteAll = document.getElementById("delete-all");
    const cancelBtn = document.getElementById("cancel");
    const alertContainer = document.getElementsByClassName("alert-container")[0];
    const overlay = document.getElementsByClassName("overlay")[0];
    const deleteCompleted = document.getElementById("delete-completed");
    const confirmDeleteAll = document.getElementById("confirm");
    const listItems = document.getElementById("item-list");
    const emptyNotify = document.getElementById("empty-notify");
    console.log(listItems.childElementCount);

    // if the list is empty then notify that there is nothing in list else continue
    if (listItems.childElementCount == 0) {
        emptyNotify.style.display = "block";
    }
    else {
        emptyNotify.style.display = "none";
    }

    // As soon as window loads set the min date of date picker as today
    // ALSO scroll in the list to go to end 
    window.onload = function () {
        var d = new Date();
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        var todayDate = [year, month, day].join('-');
        datePicker.setAttribute("min", todayDate);

        let scrollingHeight = taskContainer.scrollHeight / 50;
        let timer = setInterval(function () {
            taskContainer.scrollBy(0, scrollingHeight);
        }, 20)

        setTimeout(function () {
            clearInterval(timer);
        }, 1000)
    }



    // KNOW MORE DIV COMING DOWN ON CLICK
    infoBtn.onclick = function () {
        if (informationLeaf.style.top == "0px") {
            informationLeaf.style.top = "-468px"
        }
        else {
            informationLeaf.style.top = "0px"
        }
    }

    // CONTROL for deletion of completed items
    deleteCompleted.onclick = function () {
        if (listItems.childElementCount == 0 ||
            document.getElementById("completed-tag").innerHTML == "Completed : 0") {
            alert("Nothning to delete! Everything is Complete");
            return;
        }
        location.href = "/delete-completed";
    }

    // CONTROL for deletion of all items
    confirmDeleteAll.onclick = function () {
        location.href = "/delete-all";
    }

    // Show alert bar
    deleteAll.onclick = function () {
        if (listItems.childElementCount == 0) {
            alert("Nothning to delete!");
            return;
        }
        alertContainer.style.display = "flex";
    }

    // Remove alert bar
    cancelBtn.onclick = function () {
        alertContainer.style.display = "none";
    }

    overlay.onclick = cancelBtn.onclick;



})();