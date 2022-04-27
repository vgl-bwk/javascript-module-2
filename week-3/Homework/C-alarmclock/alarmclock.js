let counter= 0
const alarmSet = document.querySelector("#alarmSet")
let counting 

function countDown (){
  counter = --counter
  renderTime()
  if(counter === 0){
    stopCountdown(counting)
    playAlarm()
  }
  }

function setAlarm() {
  counter = document.querySelector("#alarmSet").value
  renderTime()
  counting = setInterval (countDown, 1000)};

function renderTime(){
  const timeLeft = document.querySelector("#timeRemaining");
  let minutes = parseInt(counter / 60, 10);
  let formattedMinutes = minutes
  if (minutes < 10){
   formattedMinutes = "0"+ minutes
  }
  let seconds = (counter % 60);
  let formattedSeconds = seconds
  if (seconds < 10){
  formattedSeconds = "0" + seconds
  }
  timeLeft.innerText = `Time Remaining: ${formattedMinutes}: ${formattedSeconds}`;
}

function stopCountdown(fn){
  clearInterval(fn)
}

function timerDisplay (sec){
  
}

  /*setInterval(() => {
    counter--
    if (counter === 0){
      playAlarm
      pauseAlarm
    }
  }, 1000);
}*/

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    stopCountdown(counting);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
