const daily = document.getElementById("daily-report");
const weekly = document.getElementById("weekly-report");
const monthly = document.getElementById("monthly-report");
const titleRob = document.getElementById("title");
const hoursRob = document.getElementById("hours");
const prevHour = document.getElementById("past-hour");


$(document).ready(function() {
    $.getJSON("data.json", function(data) { 
    $.each(data, function(key, value) {
        console.log(value);

        daily.addEventListener("click",  () => {
            console.log(daily);
            titleRob.innerText = value.title;
            hoursRob.innerText = value.timeframes.daily.current+"hrs";
            document.body.style.color = "white";
            prevHour.innerText = value.timeframes.daily.previous+"hrs";
        })

        weekly.addEventListener("click",  () => {
            console.log(weekly);
            titleRob.innerText = value.title;
            hoursRob.innerText = value.timeframes.weekly.current+"hrs";
            prevHour.innerText = value.timeframes.weekly.previous+"hrs";
        })

        monthly.addEventListener("click",  () => {
            console.log(monthly);
            titleRob.innerText = value.title;
            hoursRob.innerText = value.timeframes.monthly.current+"hrs";
            prevHour.innerText = value.timeframes.monthly.previous+"hrs";
        })

    



        

    });
    });
});