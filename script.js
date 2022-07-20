const daily = document.getElementById("daily-report");
const weekly = document.getElementById("weekly-report");
const monthly = document.getElementById("monthly-report");
const titleRob = document.querySelector(".title");
const hoursRob = document.querySelector(".hours");
const prevHour = document.querySelector(".past-hour");





$(document).ready(function() {

    const updateDaily = (data,period) => {

        $(".item-container").each(function(index){
            $(this).find(".title").text(data[index].title);

            switch (period) {
                case "d":
                    $(this).find(".hours").text(data[index].timeframes.daily.current+"hrs");
                    $(this).find(".past-hour").text(data[index].timeframes.daily.previous+"hrs"); 
                    document.body.style.color = "white";
                    break;

                    case "w":
                    $(this).find(".hours").text(data[index].timeframes.weekly.current+"hrs");
                    $(this).find(".past-hour").text(data[index].timeframes.weekly.previous+"hrs"); 
                    document.body.style.color = "white";
                    break;
                    
                    case "m":
                    $(this).find(".hours").text(data[index].timeframes.monthly.current+"hrs");
                    $(this).find(".past-hour").text(data[index].timeframes.monthly.previous+"hrs"); 
                    document.body.style.color = "white";
                    break;
            
                default:
                    break;
            }
        })
    }
    $.getJSON("data.json", function(data){ 
        console.log(data);
        daily.addEventListener('click', () => updateDaily(data,"d"))
        weekly.addEventListener('click', () => updateDaily(data,"w"))
        monthly.addEventListener('click', () => updateDaily(data,"m"))

    });
});

