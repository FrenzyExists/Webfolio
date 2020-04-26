var teamScoreATag = document.getElementById("team-a-score");
var teamScoreBTag = document.getElementById("team-b-score");

var teamScoreA = 0;
var teamScoreB = 0;


var teamAScoreBox = document.getElementById("teamA");
var teamBScoreBox = document.getElementById("teamB");

var maxValTag = document.getElementById("max-score");
var maxVal = 0;

var minus = document.getElementById("minus");
var plus = document.getElementById("plus");

minus.addEventListener("click", function() {
    if (maxVal > 0) {
        maxVal--;
        maxValTag.value = maxVal;
    }
});

plus.addEventListener("click", function() {
    maxVal++;
    maxValTag.value = maxVal;
});


teamAScoreBox.addEventListener("click", function () {
    if(maxVal != 0) {
        teamScoreA++;
        teamScoreATag.innerHTML = teamScoreA;
    }
    
    if (teamScoreA == maxVal && maxVal != 0 && teamScoreB != maxVal) {
        alert("Team A won!!!");
    }

});

teamBScoreBox.addEventListener("click", function () {
    if (maxVal != 0) {
        teamScoreB++;
        teamScoreBTag.innerHTML = teamScoreB;
    }

    if (teamScoreB == maxVal && maxVal != 0 && teamScoreA != maxVal) {
        alert("Team B won!!!");
//          teamScoreATag.event.preventDefault(){};
        
        
    }
});

reset.addEventListener("click", function () {
    teamScoreA = 0;
    teamScoreB = 0;
    teamScoreATag.innerHTML = teamScoreA;
    teamScoreBTag.innerHTML = teamScoreB;
    maxVal.innerHTML = 0;

});

teamScoreATag.innerHTML = teamScoreA;
teamScoreBTag.innerHTML = teamScoreB;




/*
Countdown

Ex: minute:second:milisecond
base: https://jsfiddle.net/wr1ua0db/17/
*/

//function startTimer(duration, display) {
//    var timer = duration, minutes, seconds, miliseconds;
//    
//    setInterval(function (){
//        minutes = parseInt(timer/60, 10);
//        seconds = 
//    });
//    
//}
