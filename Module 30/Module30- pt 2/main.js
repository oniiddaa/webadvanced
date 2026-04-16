var wakeUpTime;
var dsTime;
var sleepTime;
var noon=12;

function showCurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime= new Date();

    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();

    var meridian="AM";

    if(hours >= noon){
        meridian= "PM";
    }

    var clockTime= hours+ ":" + minutes+ ":" + seconds+":" + meridian;

    clock.innerText=clockTime;
    changeImage();
};

var oneSecond= 1000;
setInterval(showCurrentTime,oneSecond);

function changeImage(){
    var time=new Date().getHours();
    console.log(time);

    var image="img/ds_clock.png";
    var imageHTML= document.getElementById("timeImage");


    if(time == wakeUpTime){
        image= "img/morning.gif";

    }
    else if(time == dsTime){
        image="img/class.gif";
    }
    else if(time == sleepTime){
        image= "img/night.gif";
    }

    imageHTML.src= image;
};


function updateClock(){
    var wakeupTimeSelector= document.getElementById('wakeupTimeSelector');
    wakeuptime= wakeupTimeSelector.value;

    var dsTimeSelector= document.getElementById('dsTimeSelector');
    dstime= dsTimeSelector.value;

    var sleepTimeSelector= document.getElementById('sleepTimeSelector');
    sleeptime= sleepTimeSelector.value;
}

var saveButton= document.getElementById("saveButton");

saveButton.addEventListener("click",updateClock);

