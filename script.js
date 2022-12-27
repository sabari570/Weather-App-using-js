const serachbtnDiv = document.getElementById("searchBtn");
const inputFieldDiv = document.getElementById("city-input");
const cityNameField = document.getElementById("city-name");
const skyTypeDiv = document.getElementById("skyType");
const tempDiv = document.getElementById("temp");
const minTempDiv = document.getElementById("min-temp");
const maxTempDiv = document.getElementById("max-temp");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3b91aa782amsh5806d4ea3135972p1a15e5jsn11c1c6df4aba',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const fetchWeatherDataFromApi = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`)
    .then(response => response.json())
    .then(json => {
        console.log("Json: ",json)
        displayContents(json)
    })
    .catch(error => console.log(error))
}

const displayContents = (weatherData) => {
    cityNameField.innerText = weatherData.name;
    skyTypeDiv.innerText = weatherData.weather[0].main;
    tempDiv.innerText = weatherData.main.temp;
    minTempDiv.innerText = weatherData.main.temp_min;
    maxTempDiv.innerText = weatherData.main.temp_max;
}

const getCityName = () => {
    let city = inputFieldDiv.value;
    console.log(city)
    fetchWeatherDataFromApi(city)
}

serachbtnDiv.onclick = () => getCityName()

