const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const digital = document.querySelector(".digital");

function getTime() {
    let time = new Date();
    let getHour = (360 / 12) * time.getHours();
    let getMin = (360 / 60) * time.getMinutes();
    let getSec = (360 / 60) * time.getSeconds();

    hour.style.transform = `rotate(${getHour}deg)`;
    min.style.transform = `rotate(${getMin}deg)`;
    sec.style.transform = `rotate(${getSec}deg)`;
  
digital.innerHTML = `${fixZero(time.getHours())}:${fixZero(time.getMinutes())}:${fixZero(time.getSeconds())}`
 
};

function fixZero(time){
return time < 10 ? `0${time}` : time;
}

setInterval(getTime, 1000);

