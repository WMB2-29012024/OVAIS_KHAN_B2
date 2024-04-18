const timeInput = document.getElementById("timeinput");
const display = document.querySelector(".display");
const pausebtn = document.getElementById("Pausebtn");

// pausebtn.addEventListener("click", function(){
//     clearInterval(timer);
//     remainingTime = 0;
// });

let remainingTime = 0;
let timer;

const startTimer = () => {
  if (timer) {
    clearInterval(timer);
    remainingTime = 0;
  }

  remainingTime = remainingTime || timeInput.value;
  timer = setInterval(() => {
    updateTime();
  }, 1000);
};

const stopTimer = (timer) => {
  if (timer) {
    clearInterval(timer);
    remainingTime = 0;
  }
};

const updateTime = () => {
  if (remainingTime > 0) {
    remainingTime--;
    displayTime();
  } else {
    clearInterval(timer);
  }
};

const displayTime = () => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  display.innerText = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
export { startTimer };
export { stopTimer };
