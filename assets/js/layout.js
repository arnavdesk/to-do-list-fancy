(function () {
    const datePicker = document.getElementById("due-date");
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
    }
})();