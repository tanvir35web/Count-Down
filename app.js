function startTimer(){

    let day = document.getElementById("day");
    let hr = document.getElementById("hr");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let localTime = document.getElementById("input-date").value;
    
    let milliSecond = Date.parse(localTime);
    
    console.log(milliSecond);
    
    
    var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = milliSecond - now;
    
        var days = Math.floor( distance / (1000 * 60 * 60 * 24) );
        var hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
        var minutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor( (distance % (1000 * 60) ) / 1000);
    
        day.innerHTML = (days  < 10 ? "0" : "") + days;
        hr.innerHTML = (hours  < 10 ? "0" : "") + hours;
        min.innerHTML = (minutes  < 10 ? "0" : "") + minutes;
        sec.innerHTML = (seconds  < 10 ? "0" : "") + seconds;
    
    }, 1000); 

}

// For Dark / Light Mood Button Feature

var btn = document.getElementById("btn");
var hero = document.getElementById("hero");


btn.onclick = function() {
    hero.classList.toggle("dark-mood");

    if (hero.classList.contains("dark-mood")){
        btn.innerHTML = "Dark Mood";
        btn.style.color = 'black';
        btn.style.border = '2px solid black';

      } else {
        btn.innerHTML = "Light Mood";
        btn.style.color = 'white';
        btn.style.border = '2px solid white';

}};

          
