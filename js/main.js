const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',  'Dec'];
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const tempElement = document.querySelector('.columns__wrapper #column_2 span:nth-child(1)');
const cityElement = document.querySelector('.rows__wrapper #row_2');
const dateElement = document.querySelector('.rows__wrapper #row_1');
const img = document.getElementById('img');

const currentTime = new Date();

let day = currentTime.getDate();
let month = currentTime.getMonth();
let year = currentTime.getFullYear();
let dayOfWeek = currentTime.getDay();

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sevastopol&appid=885ed1c273a88e50fee8bb3b13b666aa`)
  .then(resolve => {
    return resolve.json();
  }).then(async data => {
    const apiIcon = data.weather[0].icon;
    const apiResponceTemp = data.main.temp;
    const temp = Math.round(apiResponceTemp - 273.15);
    img.setAttribute('src', `./img/${apiIcon}.png`);
    console.log(apiIcon)
		dateElement.textContent = `${daysOfWeek[dayOfWeek]}, ${day} ${months[month]} ${year}`;
    tempElement.textContent = temp;
    cityElement.textContent = data.name;
  })