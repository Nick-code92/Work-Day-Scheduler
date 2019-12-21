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

$(document).ready(function(){
    // console.log("jQurey")
    function currentDay(){
        $("#currentDay").text(moment())

     var now = moment().format("HH:mm")
     if (){
       var   
     }

    }
    setInterval(currentDay, 1000)
    $(".btn").on("click", function(e){
       e.preventDefault();
       var btn = $(this).val();
       var text = $(btn).val();

    //    console.log(text)
    });
});