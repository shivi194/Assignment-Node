
$(document).ready(function(){

    $("#btn").click(function(){
        // $("div.box").show();
     return getWeatherInfo();
    });

    $("#btn2").click(function(){
        $("div.box").hide();
    //  return getWeatherInfo();
    });

});

function getWeatherInfo(){
    var city=$("#city").val();

    if(city != ''){
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showData(data)
                
                $("#showWeather").html(widget);
                $("div.box").show();
                
                $("span.city").val('');
            },
            // fail: function(xhr, textStatus, errorThrown){
            //     var erdata=errorData();
            //     $("#error").html(erdata);
            //  }
        }). fail(function errorD(){
            var erdata=errorData();
            // console.log("Error");
            // $("span.error").html(erdata);
            alert(erdata);
        })
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
}

function showData(data){
    return  '<h4 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h4>'+
            "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Pressure</strong>: "+data.main.pressure+" hpa</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: "+data.main.temp_min+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: "+data.main.temp_max+"&deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: "+data.wind.speed+"m/s</h3>"+
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Direction</strong>: "+data.wind.deg+"&deg;</h3>";
}
function errorData(){
    return 'Error! City does not exist...Thank you'
}