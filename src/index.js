// fetch(
//   "https://raw.githubusercontent.com/KarolinaReseman/PROJECT-FLY/main/destination.json"
// )
//   .then((resp) => resp.json()) //transorm the data into json
//   .then(function (data) {
//     data.destination.forEach(function (el) {
//       console.log(data.destination);
//       document.getElementById(
//         "flights"
//       ).innerHTML += `<option> ${el.desc}</option>`;
//     });
//     console.log(data.destination[0].desc);
//   });

//   let heading = document.querySelector("demo"),
//   sumValue = sum(10, 5);

// var dataElement = document.getElementById("day");
// var hourElement = document.getElementById("hours");

// var DayOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var Month = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "Jun",
//   "Jyly",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var date = new Date();
// var day = DayOfWeek[date.getDay()];
// var DayOfMonth = date.getDate();
// var Month = Month[date.getMonth()];
// var year = date.getFullYear();
// var hours = date.getHours();
// var minute = date.getMinutes();
// var second = date.getSeconds();

// dataElement.innerHTML = "Today is " +DayOfMonth + " " + Month + ", " + year;


// hourElement.innerHTML = "Time: " + hours + ":" + minute + ":" + second;

// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;

//     fetch(
//       "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly" +
//         lat +
//         "&lon=" +
//         lon +
//         "&appid=YOUR_API_KEY"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         var pogodaElement = document.getElementById("pogoda");
//         var temperatura = Math.round(data.main.temp - 273.15);
//         var opis = data.weather[0].description;

//         pogodaElement.innerHTML =
//           "Aktualna pogoda: " + temperatura + "°C, " + opis;
//       })
//       .catch((error) => console.error(error));
//   });
// };

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForrecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days = ['Sunday', 'Monday' , 'Tuesday' , 'Wedsday' , 'Thursday' , 'Friday' , 'Saturday' ];
const months = ['January' , 'February' , 'March' , 'April', 'May' , 'June', 'July' , 'August','September', 'October' , 'November', 'December']

const API_KEY = '1527751f4c651ff61028e58ba9a17485';


setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour %12: hour   
  const minutes = time.getMinutes();
  const ampm = hour >=12 ? 'PM' : "AM"

  timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + '' + `<span id="am-pm">${ampm}</span>` 
  dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]  
}, 1000);


getWeatherData();
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {

    let{latitude, longitude} = success.coords;

    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json() ).then(data => {
      console.log(data)
      showWeatherData(data);
    })})
}

showWeatherData();
function showWeatherData (data) {
  let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

  timezone.innerHTML = data.timezone;
  countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'

  currentWeatherItemsEl.innerHTML = 
  `<div class="weather-item">
    <div>Humidity</div>
    <div>${humidity}%</div>
  </div>
  <div class="weather-item">
    <div>Pressure</div>
    <div>${pressure}</div>
  </div>
  <div class="weather-item">
    <div>Wind Speed</div>
    <div>${wind_speed}</div>
  </div>`;

  //   let otherDayForcast = ''
  //   data.daily.forEach((day, idx) => {
  //     if(idx == 0){
  //       currentTempEl.innerHTML = `<img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
  //           <div class="other">
  //             <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
  //             <div class="temp">Night - ${day.temp.night}&#176;C</div>
  //             <div class="temp">Day - ${day.temp.day}&#176;C</div>
  //           </div>`
  //     } else {
  //       otherDayForcast += `<div class="weather-forecast-item">
  //         <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
  //           <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
  //           <div class="temp">Night - ${day.temp.night}&#176;C</div>
  //           <div class="temp">Day - ${day.temp.day}&#176;C</div>
  //         </div>`
  //     }
  //   })


  //   weatherForecastEl.innerHTML = otherDayForcast;
};

function sprawdzLot() {
  var poczatkowa = document.getElementById("start").value;
  var docelowa = document.getElementById("end").value;

  if (start !== "" && end !== "") {
    console.log("Change a flight from " + start + " to " + end + ".");
  } else {
    console.log("Please, choose the right flight");
  }
}
