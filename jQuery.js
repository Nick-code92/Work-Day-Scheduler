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
    // console.log("jQurey")
    function currentDay() {
        $("#currentDay").text(moment());

        var now = moment().format("HH:mm");

    }
    setInterval(currentDay, 1000)
    $(".btn").on("click", function (e) {
        e.preventDefault();
        var btn = $(this).val();
        var text = $(btn).val();
    });
    // var saveBtn = $('.saveBtn');
    // saveBtn.on('click', function () {
    //     let eventId = $(this).attr('id');
    //     let eventText = $(this).parent().siblings().children('.description').val();
    //     localStorage.setItem(eventId, eventText);

        // function updateColors(){
        //     var currentTime = new Date().getHours();
        //     for (var i = 9; i < 18; i++) { 
        //     console.log(currentTime, $(`#${i}`).data("time"));
        //      if ($(`#${i}`).data("time") == currentTime){
        //         $(`#text${i}`).addClass( "present");
        //     } else if (currentTime < $(`#${i}`).data("time")) {
        //         $(`#text${i}`).addClass( "future");

        //  }):
        // function getLocalStorage(key) {
        //     let value = localStorage.getItem(key);
        //     if (value) {
        //         $(`#text${key}`).text(value);
        //     });
    });