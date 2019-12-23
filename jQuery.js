// The time

// A field to hold user input

//A save button

//The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

// Each timeblock contains an input field and save button.

// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

// The current day is displayed at the top of the calendar.

// Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

//GIVEN that an employee adds events to a specific hour in a calendar

//WHEN the employee clicks the save button

//THEN events are saved in the timeblock for that hour

$(document).ready(function () {
    var keys = Object.keys(localStorage);
    function currentDay() {
        $("#currentDay").text(moment());

        var now = moment().hour();
        updateColors(now)
    }
    setInterval(currentDay, 1000)
    $(".btn").on("click", function (e) {
        e.preventDefault();
        var btn = $(this).val();
        var text = $(btn).val();
        localStorage.setItem(btn, text);
    });

    function updateColors(now) {
        for (var i = 9; i < 18; i++) {
            var row = parseInt($(`#${i}`).attr("id"))
            if (row == now) {
                $(`#${i}`).addClass("");
                $(`#${i}`).addClass("present");
            } else if (row > now) {
                $(`#${i}`).addClass("");
                $(`#${i}`).addClass("future");
            }else {
                $(`#${i}`).addClass("");
                $(`#${i}`).addClass("past");
            }
        }
    }
    function getLocalStorage(keys) {
        keys.forEach(key => {
            let value = localStorage.getItem(key);
            $(key).text(value);

        });
    }
    getLocalStorage(keys)
});