fahrenheit=document.querySelector(".fahrenheit");
celsius=document.querySelector(".celsius");
temperature=document.querySelector(".temperature")
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


