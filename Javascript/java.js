let hourbox = document.querySelector("#hour");
let secBox= document.querySelector("#Min");
let MinBox = document.querySelector("#Sec");


    console.log(hourbox, secBox, MinBox)

function getTime(){
    let Time = new Date();
    let hour = Time.getHours();
    let Min = Time.getMinutes();
    let Sec = Time.getSeconds();
    // console.log(hour, Min, Sec);
    hourbox.innerText = hour;
    secBox.innerText = Min;
    MinBox.innerText = Sec; 
}

setInterval(getTime, 1000)

getTime();