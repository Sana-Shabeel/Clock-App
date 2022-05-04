console.log("AB9");

const displayTime = document.querySelector(".current-time");
const greetingWrapper = document.querySelector(".greeting-wrapper");
const newQoute = document.querySelector(".fa-arrow-rotate-right");

document.addEventListener("DOMContentLoaded", () => {
  greeting();
  getTime();
  getQoute();
  setInterval(() => {
    const date = new Date();
    const hr = `${date.getHours()}`.padStart(2, "0");
    const min = `${date.getMinutes()}`.padStart(2, "0");
    displayTime.textContent = `${hr}:${min}`;
  }, 1000);
});
newQoute.addEventListener("click", getQoute);
function getQoute() {
  const qoute = document.querySelector(".qoute");
  const authors = document.querySelector(".author");
  const random = Math.floor(Math.random() * 1643);
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
      qoute.textContent = `“${data[random].text}”`;
      authors.textContent = data[random].author ?? "Unknown";
    });
}

function greeting() {
  const sun = document.querySelector(".fa-sun");
  const date = new Date();
  const hr = date.getHours();
  if (hr >= 18 || hr <= 6) {
    document.body.style.backgroundImage = 'url("./images/night-live-1.jpg")';
    sun.style.display = "none";
    greetingWrapper.innerHTML = `
    <i class="fa-solid fa-moon"></i>
    <p class="greeting">GOOD EVENING, IT'S CURRENTLY</p>
    `;
  }
}

const timezone = document.querySelector(".current-timezone");
const weekday = document.querySelector(".week-day");
const yearday = document.querySelector(".year-day");
const weekNumber = document.querySelector(".week-number");
const currentLocation = document.querySelector(".current-location");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function getTime() {
  fetch("https://worldtimeapi.org/api/ip")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const getCity = data.timezone.split("/").slice(1).join("");
      console.log(getCity);
      timezone.textContent = data.timezone;
      weekday.textContent = days[data.day_of_week];
      yearday.textContent = data.day_of_year;
      weekNumber.textContent = data.week_number;
      currentLocation.textContent = `IN ${getCity}`;
    });
}
const footer = document.querySelector(".wrapper-div");
const showMoreBtn = document.querySelector(".show-more-btn");
