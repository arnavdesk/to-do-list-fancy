(function () {

    const categoryDivs = document.getElementsByClassName("category");
    const checkboxes = document.getElementsByClassName("input-check");

    for (const it of categoryDivs) {
        if (it.innerHTML.toLowerCase() == "gym") {
            it.style.backgroundColor = "red";
        }
        else if (it.innerHTML.toLowerCase() == "home") {
            it.style.backgroundColor = "green";
        }
        else if (it.innerHTML.toLowerCase() == "work") {
            it.style.backgroundColor = "yellow";
        }
        else if (it.innerHTML.toLowerCase() == "other") {
            it.style.backgroundColor = "pink";
        }
        else if (it.innerHTML.toLowerCase() == "college") {
            it.style.backgroundColor = "blue";
        }
    }

    for (const chkbox of checkboxes) {
        let lastDate = new Date(chkbox.parentElement.querySelector(".completion-date-raw").innerHTML);
        let today = new Date();
        let daysLeft = (lastDate.getTime() - today.getTime()) / (60 * 60 * 24 * 1000);
        if (daysLeft <= 0) {
            chkbox.parentElement.querySelector(".deadline").innerHTML = "Deadline Miss";
            chkbox.parentElement.querySelector(".deadline").style.display = "block";
        }
        else if (daysLeft < 4) {
            chkbox.parentElement.querySelector(".deadline").style.display = "block";

        }
        if (chkbox.parentElement.querySelector(".state").innerHTML == 1) {
            chkbox.checked = true;
            chkbox.parentElement.style.backgroundColor = "gray";
        } else {
            chkbox.checked = false;
            chkbox.parentElement.style.backgroundColor = "white";
        }
    }


    for (const chkbox of checkboxes) {
        chkbox.onchange = function () {
            if (chkbox.checked) {
                chkbox.parentElement.style.backgroundColor = "gray";
                fetch("/update-state?" + "id=" +
                    chkbox.parentElement.querySelector(".id").innerHTML
                    + "&state=" + 1).then(response => response.json()).then(data => console.log(data));
                chkbox.parentElement.querySelector(".state").innerHTML = 1;
            }
            else {
                chkbox.parentElement.style.backgroundColor = "white";
                fetch("/update-state?" + "id=" +
                    chkbox.parentElement.querySelector(".id").innerHTML
                    + "&state=" + 0).then(response => response.json()).then(data => console.log(data));
                chkbox.parentElement.querySelector(".state").innerHTML = 0;
            }
        }
    }




})();