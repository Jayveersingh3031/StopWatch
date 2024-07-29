var min= document.querySelector("#min");
var sec= document.querySelector("#sec");
var count= document.querySelector("#count");
var counter=00;
var second=00;
var minute=00;

var stop=document.querySelector("#stop");
var start=document.querySelector("#start");
var reset=document.querySelector("#reset");
start.addEventListener("click",function(){
     set=setInterval (function() {
        if(counter<100){
            counter++;
            count.innerHTML=counter;
        }
        else{
            counter=0;
            second++;
            sec.innerHTML=second +":";
        }
        if(second==59){
            second=0;
            sec.innerHTML=second +":";
            minute++;
            min.innerHTML=minute +":";
        }
    },10);
    
});

stop.addEventListener("click",function(){
    clearInterval(set);
})

reset.addEventListener("click",function(){
    clearInterval(set);
     counter=00;
     second=00;
     minute=00;
    count.innerHTML=counter;
    sec.innerHTML=second +":";
    min.innerHTML=minute +":";
});


