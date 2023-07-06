// we are going to change the numbers dynamically using js
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
// we use the new date constructor to set the first date of the new year
const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

// create a function to create the countdown and call it first to start when the page is loaded
updateCountdown();

function updateCountdown() {
  // In this line if we put the new date empty, it gets the current time automatically
  const now = new Date().getTime();
  const gap = newYearTime - now;

  //  creating the clock elements
  const second = 1000;
  const minutes = second * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  //  doing the calculation for the remaining time
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minutes);
  const s = Math.floor((gap % minutes) / second);

  //   Now we must put the result of top calculation into the element that we created at the beginning of this page .
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  //   calling the function ever second.
  setTimeout(updateCountdown, 1000);
}
