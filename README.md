# 🌦️ JavaScript Weather Web App

A beginner-friendly **Weather Application** built using **HTML, CSS, and Vanilla JavaScript**, focused mainly on **API integration, data fetching, and logic handling**.

> ⚠️ **Note:** The CSS styling was AI-assisted. The primary goal of this project was to deeply understand **JavaScript logic, API flow, and real-world debugging**, not UI design.

---

## 📌 Project Objective

The purpose of this project was to:

* Learn how to integrate a **real external API**
* Understand how `fetch()` works
* Handle **JSON responses**
* Work with **async / await**
* Update UI dynamically using JavaScript
* Implement **real-time updates using timers**
* Debug common beginner mistakes in real projects

---

## 🚀 Features

* Search weather by **city name**
* Fetch live data from **OpenWeather API**
* Auto-refresh weather data every **1 minute**
* Dynamic weather icons based on condition
* Graceful error handling for invalid cities

---

## 🧱 Project Structure

```
JS-WEATHER-WEB-APP
│
├── index.html      # Structure of the app
├── styles.css      # Styling (AI-assisted)
├── script.js       # Core JavaScript logic
└── README.md       # Project documentation
```

---

## 🧠 How the Application Works (High-Level Flow)

1. User enters a city name
2. Clicks **Get Weather**
3. App sends a request to OpenWeather API
4. API responds with JSON data
5. JavaScript extracts required values
6. UI updates dynamically
7. Timer re-fetches data every 60 seconds

---

## 📄 index.html (Structure Explanation)

The HTML file provides the **basic structure** of the app.

### Important Elements

```html
<input id="city-input">
```

* Takes city name input from the user

```html
<button id="get-weather-btn">
```

* Triggers the weather fetch process

```html
<div id="weather-info">
```

* Container where weather data is displayed

```html
<img id="weather-icon">
```

* Displays weather icon dynamically

```html
<p id="error-message">
```

* Shown only when API request fails

---

## 📜 script.js (Detailed Explanation)

This file contains the **entire logic of the application**. Below is a **function-by-function explanation**, describing **what each function does, why it exists, and how it works internally**.

---

### 1️⃣ `DOMContentLoaded` Wrapper

```js
document.addEventListener("DOMContentLoaded", function () {
```

**What it does:**

* Delays execution of JavaScript until the HTML page is fully loaded into memory.

**Why it is needed:**

* Prevents errors like `null` when accessing elements that are not yet created.

**How it works:**

* Browser fires the `DOMContentLoaded` event after parsing HTML.
* The callback function runs only once, safely accessing DOM elements.

---

### 2️⃣ DOM Element References

```js
const cityInput = document.getElementById("city-input");
```

**What it does:**

* Stores references to HTML elements in variables.

**Why it is needed:**

* JavaScript cannot directly manipulate HTML without referencing elements.

**How it works:**

* `getElementById` searches the DOM tree and returns the matching element object.

---

### 3️⃣ `fetchWeatherData(city)`

```js
async function fetchWeatherData(city) {
```

**What it does:**

* Fetches weather data for a given city from the OpenWeather API.

**Why it is used:**

* Keeps API-related logic separate from UI logic (clean separation of concerns).

**How it works internally (step-by-step):**

1. Constructs the API URL using the city name and API key.
2. Sends an HTTP GET request using `fetch()`.
3. Waits for the response using `await`.
4. Checks if the response status is successful.
5. Converts raw response data into JSON.
6. Returns the parsed JSON object.

---

### 4️⃣ Button Click Event Handler

```js
getWeatherBtn.addEventListener("click", async function () {
```

**What it does:**

* Executes when the user clicks the **Get Weather** button.

**Why it is needed:**

* Acts as the main trigger point for fetching and displaying data.

**How it works:**

1. Reads the city entered by the user.
2. Calls `fetchWeatherData(city)`.
3. Passes the result to `displayWeatherData()`.
4. Starts a timer for automatic updates.

---

### 5️⃣ `displayWeatherData(data)`

```js
function displayWeatherData(data) {
```

**What it does:**

* Updates the UI using the data received from the API.

**Why it is needed:**

* Separates display logic from data-fetching logic.

**How it works internally:**

1. Extracts required fields from the JSON object.
2. Converts temperature from Kelvin to Celsius.
3. Updates text content of HTML elements.
4. Sets the image source for the weather icon.
5. Makes the weather section visible.

---

### 6️⃣ `setInterval` (Real-Time Update Logic)

```js
intervalId = setInterval(async function () {
```

**What it does:**

* Re-fetches weather data automatically every 60 seconds.

**Why it is used:**

* Simulates real-time weather updates without page refresh.

**How it works:**

* Browser schedules the function to run repeatedly after a fixed delay.
* Each execution fetches fresh data and updates the UI.

---

### 7️⃣ `clearInterval(intervalId)`

**What it does:**

* Stops the previously running timer.

**Why it is needed:**

* Prevents multiple timers when the user searches for a new city.

**How it works:**

* Uses the timer ID returned by `setInterval` to cancel that timer.

---

### 8️⃣ `showError()`

```js
function showError() {
```

**What it does:**

* Displays an error message when API request fails.

**Why it is needed:**

* Improves user experience.
* Prevents application crash.

**How it works:**

* Hides weather information section.
* Shows error message element.

---

### 2️⃣ DOM Element Selection

```js
const cityInput = document.getElementById("city-input");
```

**What it does:**

* Stores references to HTML elements

**Why it is used:**

* Allows JavaScript to read input and update UI dynamically

---

### 3️⃣ API Key

```js
const API_KEY = "YOUR_API_KEY";
```

**What it does:**

* Authenticates requests to OpenWeather API

**Why it is used:**

* Required by OpenWeather to track API usage

---

### 4️⃣ Timer Variable

```js
let intervalId = null;
```

**What it does:**

* Stores reference to the running timer

**Why it is used:**

* Prevents multiple timers from running simultaneously

---

### 5️⃣ Button Click Event

```js
getWeatherBtn.addEventListener("click", async function () { ... })
```

**What it does:**

* Executes when user clicks **Get Weather**

**Why it is used:**

* Acts as the main trigger for API calls

---

### 6️⃣ fetchWeatherData(city)

```js
async function fetchWeatherData(city) { ... }
```

**What it does:**

* Sends request to OpenWeather API
* Returns parsed JSON response

**Why it is used:**

* Separates API logic from UI logic (clean design)

**How it works internally:**

1. Builds API URL
2. Calls `fetch(url)`
3. Checks response status
4. Converts response to JSON

---

### 7️⃣ displayWeatherData(data)

```js
function displayWeatherData(data) { ... }
```

**What it does:**

* Updates UI with fetched weather data

**Why it is used:**

* Keeps UI logic separate from API logic

**Data extracted:**

* City name
* Temperature (Kelvin → Celsius)
* Weather description
* Weather icon

---

### 8️⃣ Real-Time Update Using setInterval

```js
intervalId = setInterval(async function () { ... }, 60000);
```

**What it does:**

* Automatically fetches weather every 60 seconds

**Why it is used:**

* Simulates real-time behavior

**Important:**

* `clearInterval(intervalId)` is used to stop old timers

---

### 9️⃣ Error Handling

```js
catch { showError(); }
```

**What it does:**

* Displays error message if API fails

**Why it is used:**

* Prevents app crash
* Improves user experience

---

## 🎨 styles.css (Brief Note)

* Handles layout and visual appearance
* Image sizing is managed via CSS (`width`, `height`)
* Styling was **AI-assisted**, not manually written

---

## 🧠 Key Concepts Learned

* API request–response cycle
* JSON data parsing
* Async JavaScript behavior
* Timers (`setInterval`, `clearInterval`)
* DOM manipulation
* Debugging real-world frontend issues

---

## ✅ Conclusion

This project was intentionally built with **simple tools and no frameworks** to strengthen JavaScript fundamentals. It reflects a learning-focused approach with emphasis on **logic, data handling, and real-world problem solving**.

---

## 🔗 Live & Repository

* GitHub Repository: **JS-WEATHER-WEB-APP**

---

Feel free to fork, explore, or suggest improvements 🚀
