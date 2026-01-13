document.addEventListener("DOMContentLoaded", function () {

  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const weatherIcon = document.getElementById("weather-icon");

  const API_KEY = "e0c24b13d085d997dfa353eb5c3ee60e";

  let intervalId = null;

  getWeatherBtn.addEventListener("click", async function () {
    const city = cityInput.value.trim();
    if (city === "") return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);

      if (intervalId) {
        clearInterval(intervalId);
      }

      intervalId = setInterval(async function () {
        try {
          const updatedData = await fetchWeatherData(city);
          displayWeatherData(updatedData);
          console.log("Weather updated");
        } catch {
          showError();
        }
      }, 60000);

    } catch {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      API_KEY;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    return response.json();
  }


  const colorfulIcons = {
    Clear: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    Clouds: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    Rain: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    Drizzle: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    Thunderstorm: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    Snow: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    Mist: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    Smoke: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    Haze: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    Fog: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png"
  };


  function displayWeatherData(data) {
    cityNameDisplay.textContent = data.name;
    temperatureDisplay.textContent =
      "Temperature: " + Math.round(data.main.temp - 273.15) + " °C";
    descriptionDisplay.textContent =
      "Description: " + data.weather[0].description;

    const condition = data.weather[0].main;
    weatherIcon.src = colorfulIcons[condition] || colorfulIcons["Clear"];


    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }

});
