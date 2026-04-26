const endTeller = document.querySelector(".end_teller");
const hackathonSection = document.getElementById("AboutHackathon");

function setCountdownValues(days, hours, minutes, seconds) {
  const daysEl = document.getElementById("ah-days");
  const hoursEl = document.getElementById("ah-hours");
  const minutesEl = document.getElementById("ah-minutes");
  const secondsEl = document.getElementById("ah-seconds");

  if (daysEl) daysEl.innerText = days;
  if (hoursEl) hoursEl.innerText = hours;
  if (minutesEl) minutesEl.innerText = minutes;
  if (secondsEl) secondsEl.innerText = seconds;
}

const ahCountdown = () => {
  const startAttr = hackathonSection?.dataset?.hackathonStart;
  const countDate = startAttr ? Date.parse(startAttr) : NaN;

  if (!Number.isFinite(countDate)) {
    setCountdownValues("00", "00", "00", "00");
    if (endTeller) endTeller.innerText = "Dates to be announced";
    clearInterval(intervalId);
    return;
  }

  const now = Date.now();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap < 0) {
    setCountdownValues("00", "00", "00", "00");
    if (endTeller) endTeller.innerText = "See you at IndabaX Gambia";
    clearInterval(intervalId); // Use the interval ID here
    return;
  }

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  setCountdownValues(
    textDay < 10 ? `0${textDay}` : String(textDay),
    textHour < 10 ? `0${textHour}` : String(textHour),
    textMinute < 10 ? `0${textMinute}` : String(textMinute),
    textSecond < 10 ? `0${textSecond}` : String(textSecond)
  );
};

const intervalId = setInterval(ahCountdown, 1000);
