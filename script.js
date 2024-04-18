import { startTimer } from "./timer.js";
import { stopTimer } from "./timer.js";

const startbtn = document.getElementById("startbtn");
const pauseBtn = document.getElementById("Pausebtn");


startbtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);

