let day = document.getElementById("day");
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

var countDownDate = new Date("Nov 29, 2023 00:05:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor( distance / (1000 * 60 * 60 * 24) );
    var hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    var minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor( (distance % (1000 * 60) ) / 1000);

    day.innerHTML = (days  < 10 ? "0" : "") + days;
    hr.innerHTML = (hours  < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes  < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds  < 10 ? "0" : "") + seconds;

}, 1000); 