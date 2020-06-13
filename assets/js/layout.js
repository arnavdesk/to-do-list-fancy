(function () {
    const datePicker = document.getElementById("due-date");
    const taskContainer = document.getElementsByClassName("task-container")[0];
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
            taskContainer.scrollTop = 0;
        }, 1200)
    }

    let infoBtn = document.getElementById("info-btn");
    let informationLeaf = document.getElementsByClassName("information-leaf")[0];

    infoBtn.onclick = function () {
        if (informationLeaf.style.top == "0px") {
            informationLeaf.style.top = "-441px"
        }
        else {
            informationLeaf.style.top = "0px"
        }
    }

    let deleteAll = document.getElementById("delete-all");
    let cancelBtn = document.getElementById("cancel");
    let alertContainer = document.getElementsByClassName("alert-container")[0];
    let overlay = document.getElementsByClassName("overlay")[0];
    let deleteCompleted = document.getElementById("delete-completed");
    let confirmDeleteAll = document.getElementById("confirm");

    deleteCompleted.onclick = function () {
        location.href = "/delete-completed";
    }

    confirmDeleteAll.onclick = function () {
        location.href = "/delete-all";
    }

    deleteAll.onclick = function () {
        alertContainer.style.display = "flex";
    }

    cancelBtn.onclick = function () {
        alertContainer.style.display = "none";
    }

    overlay.onclick = cancelBtn.onclick;



})();