(function () {

    const categoryDivs = document.getElementsByClassName("category");
    const checkboxes = document.getElementsByClassName("input-check");
    let completed = 0;
    let pending = 0;

    let updatePending = function () {
        document.getElementById("completed-tag").innerHTML = "Completed : " + completed;
        document.getElementById("pending-tag").innerHTML = "Pending : " + pending;
    }

    for (const it of categoryDivs) {
        if (it.innerHTML.toLowerCase() == "gym") {
            it.style.backgroundColor = "#EF6C00";
        }
        else if (it.innerHTML.toLowerCase() == "home") {
            it.style.backgroundColor = "#2E7D32";
        }
        else if (it.innerHTML.toLowerCase() == "work") {
            it.style.backgroundColor = "#4527A0";
        }
        else if (it.innerHTML.toLowerCase() == "other") {
            it.style.backgroundColor = "#D81B60";
        }
        else if (it.innerHTML.toLowerCase() == "college") {
            it.style.backgroundColor = "#1565C0";
        }
    }



    for (const chkbox of checkboxes) {
        let parentListElement = chkbox.parentElement.parentElement.parentElement.parentElement;
        console.log(parentListElement);
        let lastDate = new Date(parentListElement.querySelector(".completion-date-raw").innerHTML);
        let today = new Date();
        let daysLeft = (lastDate.getTime() - today.getTime()) / (60 * 60 * 24 * 1000);
        if (daysLeft <= 0) {
            parentListElement.querySelector(".deadline").innerHTML = "Deadline Miss";
            parentListElement.querySelector(".deadline").style.display = "block";
        }
        else if (daysLeft < 4) {
            parentListElement.querySelector(".deadline").style.display = "block";

        }
        if (parentListElement.querySelector(".state").innerHTML == 1) {
            chkbox.checked = true;
            parentListElement.querySelector(".deadline").style.display = "none";
            parentListElement.style.backgroundColor = "gray";
            parentListElement.querySelector(".completion-date").style.textDecoration = "line-through";
            parentListElement.querySelector(".note").style.textDecoration = "line-through";
            completed++
        } else {
            chkbox.checked = false;
            parentListElement.style.backgroundColor = "white";
            pending++;
        }
    }

    updatePending();



    for (const chkbox of checkboxes) {
        let parentListElement = chkbox.parentElement.parentElement.parentElement.parentElement;
        console.log(parentListElement);
        chkbox.onchange = function () {
            let lastDate = new Date(parentListElement.querySelector(".completion-date-raw").innerHTML);
            let today = new Date();
            let daysLeft = (lastDate.getTime() - today.getTime()) / (60 * 60 * 24 * 1000);

            if (chkbox.checked) {
                parentListElement.querySelector(".deadline").style.display = "none";
                parentListElement.style.backgroundColor = "gray";
                parentListElement.querySelector(".completion-date").style.textDecoration = "line-through";
                parentListElement.querySelector(".note").style.textDecoration = "line-through";
                fetch("/update-state?" + "id=" +
                    parentListElement.querySelector(".id").innerHTML
                    + "&state=" + 1).then(response => response.json()).then(data => console.log(data));
                parentListElement.querySelector(".state").innerHTML = 1;
                completed++;
                pending--;
                updatePending();
            }
            else {
                if (daysLeft < 4) {
                    parentListElement.querySelector(".deadline").style.display = "block";
                }
                parentListElement.querySelector(".completion-date").style.textDecoration = "";
                parentListElement.querySelector(".note").style.textDecoration = "";
                parentListElement.style.backgroundColor = "white";
                fetch("/update-state?" + "id=" +
                    parentListElement.querySelector(".id").innerHTML
                    + "&state=" + 0).then(response => response.json()).then(data => console.log(data));
                parentListElement.querySelector(".state").innerHTML = 0;
                pending++;
                completed--;
                updatePending();
            }
        }
    }




})();