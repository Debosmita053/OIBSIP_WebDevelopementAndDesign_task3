let fahrenheit=document.querySelector(".fahrenheit");
let celsius=document.querySelector(".celsius");
let temperature=document.querySelector(".temperature")
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");


let searchBox=document.querySelector/(".search input");
let searchBtn=document.querySelector/(".search button")

// weather api

const api="68f5848c7456d96249ab14704301f015";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";

async function checkWeather(city) {
    
    const response=await fetch(apiURL + city +`&appid=${api}`);

    let data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    temperature.innerHTML=Math.round(data.main.temp)+"°C";
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"km/h";

}

searchBtn.addEventListener("click",function(event){

    checkWeather();

})




// conversion



let curtemp=temperature.innerHTML;
let iscel=true;

fahrenheit.addEventListener("click",function(event){
    
    if(iscel)
    {
        temperature.innerHTML=Math.round(((9/5)*parseFloat(curtemp))+32) +  "°F";
        iscel=false;
    }
})


celsius.addEventListener("click",function(event){
    
    if(!iscel)
    {
        temperature.innerHTML=curtemp ;
        iscel=true;
    }
})