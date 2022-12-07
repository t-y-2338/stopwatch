const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;
let elapsedTime = 0;
let intervalId;

function updateTime() {
  const ms = elapsedTime % 1000;
  const s = Math.floor(elapsedTime  / 1000) % 60;
  const m = Math.floor(elapsedTime / (1000 * 60) % 60);
  const h = Math.floor(elapsedTime / (1000 * 60 * 60));
  
  const msString = ms.toString().padStart(3, "0");
  const sString = s.toString().padStart(2, "0");
  const mString = m.toString().padStart(2, "0");
  const hString = h.toString().padStart(2, "0");
  
  timer.textContent = `${hString}:${mString}:${sString}.${msString}`;
}

start.addEventListener("click", function() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  
  startTime = new Date();
  intervalId = setInterval(function() {
    const now = Date.now();
    elapsedTime += now - startTime;
    startTime = now;
    updateTime();
  }, 10);
});

stop.addEventListener("click", function() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  
  clearInterval(intervalId);
});

reset.addEventListener("click", function() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;

  clearInterval(intervalId);
  elapsedTime = 0;
  updateTime();
});
