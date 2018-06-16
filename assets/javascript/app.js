window.onload = function() {

    $("#start").click(triviaTimer.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
let intervalId;

// prevents timer from being speeding up
let clockRunning = false;

let triviaTimer = {

time: 60
reset: function() {

    triviaTimer.time = 60;
    // Change the "timer" div to "60."
    $('#timer').text("60");
},

start: function() {

    // start the clock
    if (!clockRunning) {
    clearInterval(invervalId);
    intervalId = setInterval(triviaTimer.count, 1000);
    triviaTimer.clockRunning = true;
    }

},