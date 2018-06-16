$( document ).ready(function() {
    $("#start").on("click", timer.start);
    console.log( "ready!" );
});

let intervalId;
let clockRunning = false;
let timer = {

    time: 60
    
    reset: function() {
    
        timer.time = 60;
        // reset timer back to 60 seconds
        $("#display").text("60");
    },

    start: function() {

        // start the countdown and set the clock to running
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
        }
    },

    stop: function() {
        if (timer.time = 0) {
            clearInterval(intervalId);
            clockRunning = false;
            timer.reset();
            alert('Your time is up!');
        }
        
    },

    count: function() {

        // decrement timer by 1
        timer.time--;
        return time;
        // get the new time
        //let time = timer.time;
        console.log(time);

        // show the remaining time in the display div
        $("#display").text(time);
    }
};


// ************************************
//  timer.start({countdown: true, startValues: {seconds: 60}}); //set the countdown to 60 seconds
//  
//  $('.countdown #counter').html(timer.getTimeValues().toString());
//  
//  timer.addEventListener('secondsUpdated', function (e) {
//      $('.countdown #counter').html(timer.getTimeValues().toString());
//  });
//  timer.addEventListener('targetAchieved', function (e) {
//      $('.countdown #counter').alert('Game Over!');
//  });
// ************************************
//function countdown(minutes) {
//    let seconds = 60;
//    function tick() {
//        
//        let counter = document.getElementById("counter");
//        seconds--;
//        counter.text(seconds);
//        if( seconds > 0 ) {
//            setTimeout(tick, 1000);
//        } else {
//            if(mins > 1){
//               countdown(mins-1);           
//            }
//        }
//    }
//    tick();
//}
//
//$("#start").click(countdown);
