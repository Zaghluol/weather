var cityinput = document.getElementById("city")
// var cityinput = "cairo"
var find = document.getElementById("find")
var cityName = document.getElementById("city-name")
var condition_text = document.getElementById("cond-text")
var condition_icon = document.getElementById("cond-icon")
var condition_text2 = document.getElementById("cond-text2")
var condition_icon2 = document.getElementById("cond-icon2")
var condition_text3 = document.getElementById("cond-text3")
var condition_icon3 = document.getElementById("cond-icon3")
var maxDeg = document.getElementById("max-deg")
var maxDeg2 = document.getElementById("max-deg2")
var maxDeg3 = document.getElementById("max-deg3")
var minDeg2 = document.getElementById("min-deg2")
var minDeg3 = document.getElementById("min-deg3")
var x;
const d = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let month = months[d.getMonth()];
let day = days[d.getDay()];
let day2 = days[d.getDay()+1];
let day3 = days[d.getDay()+2];
document.getElementById("date1").innerHTML = month +","+ d.getDate();
document.getElementById("d1").innerHTML = day;
document.getElementById("d2").innerHTML = day2;
document.getElementById("d3").innerHTML = day3;
let recipelist= []
let degree = new XMLHttpRequest()
degree.open('get' , 'https://api.weatherapi.com/v1/forecast.json?key=31e31ea6749f42749c895833242006&q=cairo&days=3')
degree.send()
degree.addEventListener("readystatechange", function(){
    if(degree.readyState == 4){
        let data = JSON.parse(degree.response)
        recipelist = data.forecast
        let A7a = data.location
        cityName.innerHTML = data.location.name
        maxDeg.innerHTML = data.current.temp_c +"<sup>o</sup>C"       
        maxDeg2.innerHTML = data.forecast.forecastday[1].day.maxtemp_c +"<sup>o</sup>C"                   
        maxDeg3.innerHTML = data.forecast.forecastday[2].day.maxtemp_c +"<sup>o</sup>C"  
        minDeg2.innerHTML = data.forecast.forecastday[1].day.mintemp_c +"<sup>o</sup>"                  
        minDeg3.innerHTML = data.forecast.forecastday[2].day.mintemp_c +"<sup>o</sup>"                
        condition_text.innerHTML = data.forecast.forecastday[0].day.condition.text
        condition_text2.innerHTML = data.forecast.forecastday[1].day.condition.text
        condition_text3.innerHTML = data.forecast.forecastday[2].day.condition.text
        condition_icon.src = data.forecast.forecastday[0].day.condition.icon
        condition_icon2.src = data.forecast.forecastday[1].day.condition.icon
        condition_icon3.src = data.forecast.forecastday[2].day.condition.icon
        console.log(data); 
        console.log(data.forecast.forecastday[0].day.condition.text);
        console.log(data.location.name);
        console.log(data.current.condition.text);
        console.log(data.current.condition.icon);
    }
})
find.addEventListener('click', function (e){
x= cityinput.value 
console.log(x);
let recipelist= []
let degree = new XMLHttpRequest()
degree.open('get' , 'https://api.weatherapi.com/v1/forecast.json?key=31e31ea6749f42749c895833242006&q='+x+'&days=3')
degree.send()
degree.addEventListener("readystatechange", function(){
    if(degree.readyState == 4){
        let data = JSON.parse(degree.response)
        recipelist = data.forecast
        let A7a = data.location
        cityName.innerHTML = data.location.name
        maxDeg.innerHTML = data.current.temp_c +"<sup>o</sup>C"       
        maxDeg2.innerHTML = data.forecast.forecastday[1].day.maxtemp_c +"<sup>o</sup>C"                   
        maxDeg3.innerHTML = data.forecast.forecastday[2].day.maxtemp_c +"<sup>o</sup>C"  
        minDeg2.innerHTML = data.forecast.forecastday[1].day.mintemp_c +"<sup>o</sup>"                  
        minDeg3.innerHTML = data.forecast.forecastday[2].day.mintemp_c +"<sup>o</sup>"                
        condition_text.innerHTML = data.forecast.forecastday[0].day.condition.text
        condition_text2.innerHTML = data.forecast.forecastday[1].day.condition.text
        condition_text3.innerHTML = data.forecast.forecastday[2].day.condition.text
        condition_icon.src = data.forecast.forecastday[0].day.condition.icon
        condition_icon2.src = data.forecast.forecastday[1].day.condition.icon
        condition_icon3.src = data.forecast.forecastday[2].day.condition.icon
        console.log(data); 
        console.log(data.forecast.forecastday[0].day.condition.text);
        console.log(data.location.name);
        console.log(data.current.condition.text);
        console.log(data.current.condition.icon);
    }
})
})