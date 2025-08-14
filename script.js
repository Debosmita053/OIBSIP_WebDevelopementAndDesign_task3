fahrenheit=document.querySelector(".fahrenheit");
celsius=document.querySelector(".celsius");
temperature=document.querySelector(".temperature")
let curtemp=temperature.innerHTML;

fahrenheit.addEventListener("click",function(event){
    
    temperature.innerHTML=Math.round(((9/5)*parseFloat(curtemp))+32) +  "°F";
})


celsius.addEventListener("click",function(event){
    
    temperature.innerHTML=curtemp ;
})


