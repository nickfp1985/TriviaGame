$(document).ready(function() {
    
    let counter = 60;
    let time;
    let correct = 0;
    let wrong = 0;
    
    function results() {
        let q1 = $('input[name="q1"]:checked').val();
        let q2 = $('input[name="q2"]:checked').val();
        let q3 = $('input[name="q3"]:checked').val();
        let q4 = $('input[name="q4"]:checked').val();
        let q5 = $('input[name="q5"]:checked').val();
        let q6 = $('input[name="q6"]:checked').val();

        if (q1 === 'correct') {
                correct++;
            } else {
                wrong++;
            }
        if (q2 === 'correct') {
                correct++;
            } else {
                wrong++;
            }
        if (q3 === 'correct') {
                correct++;
            } else {
                wrong++;
            }
        if (q4 === 'correct') {
                correct++;
            } else {
                wrong++;
            }
        if (q5 === 'correct') {
                correct++;
            } else {
                wrong++;
            }
        if (q6 === 'correct') {
                correct++;
            } else {
                wrong++;
            }
    };
    
    function timer() {
        $('.timer').text('Time Remaining: ' + counter);
        time = setInterval(function () {
            counter--;
            $('.timer').text('Time Remaining: ' + counter);
            if (counter === 0) {
                alert("Time is up, game over!")
            }
        }, 1000);
    };
    
    function scorePage() {
        results();
        clearInterval(time);
        $('#answers').show();
        $('.numCorrect').text('Correct Answers: ' + correct);
        $('.numWrong').text('Wrong Answers: ' + wrong);
        $('#retry').show();
        $('#finished').hide();
    }
    
    $('#start').click(function () {
        timer();
    });
    
    $('#finished').click(function () {
        scorePage()
    });
    
    
    function reset() {
        counter = 60;
        time;
        timer();
        results();
        $('input[type=radio]').prop('checked', false);
        correct = 0;
        wrong = 0;
        $('.numCorrect').text('Correct Answers: ' + correct);
        $('.numWrong').text('Wrong Answers: ' + wrong);
    }
    
    $('#retry').click(function () {
        reset()
    });
    
};
