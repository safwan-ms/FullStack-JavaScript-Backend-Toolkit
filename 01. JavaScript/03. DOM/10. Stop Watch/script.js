const hourInputElement = document.getElementById('hoursInput');
const minutesInputElement = document.getElementById('minutesInput');
const secondsInputElement = document.getElementById('secondsInput');

const hourOutputElement = document.getElementById('hoursOutput');
const minutesOutputElement = document.getElementById('minutesOutput');
const secondsOutputElement = document.getElementById('secondsOutput');

const startButtonElement = document.getElementById('startTimer');

let targetTime ;
let timeInterval;


const updateTime = () => {

    if(targetTime){
       
    const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000;
    if(differenceInSeconds < 1){
        clearInterval(timeInterval);
    }
    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor(differenceInSeconds / 60) % 60;
    const seconds = Math.floor(differenceInSeconds % 60);

    hourOutputElement.textContent = `${hours} hour`;
    minutesOutputElement.textContent = `${minutes} minutes`;
    secondsOutputElement.textContent = `${seconds} seconds`;
}
}
startButtonElement.addEventListener('click', () => {
    const futureHours = parseInt(hourInputElement.value);
    const futureMinutes = parseInt(minutesInputElement.value);
    const futureSeconds = parseInt(secondsInputElement.value);

    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentSeconds = date.getSeconds();

    date.setHours(currentHours + futureHours)
    date.setMinutes(currentMinutes + futureMinutes)
    date.setSeconds(currentSeconds + futureSeconds)

    targetTime = date.getTime();
    localStorage.setItem('targetTime',targetTime)
    updateTime();
    timeInterval = setInterval(updateTime,500)
});

const storedTargetTime = localStorage.getItem('targetTime');

if(storedTargetTime){
    targetTime = storedTargetTime
    updateTime();
    timeInterval = setInterval(updateTime,500)

}
updateTime();

