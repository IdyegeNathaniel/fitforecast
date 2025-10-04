### **FitForecast**
---
A minimalistic web application that provides daily weather forecasts and intelligent outfit recommendations based on current conditions.

### **Overview**
---
FitForecast takes the guesswork out of getting dressed by combining real-time weather data with smart outfit suggestions. Simply check the app to see what the weather will be like and what you should wear.

### **Features**
---
* **Real-time Weather Data** - Get accurate weather forecasts powered by OpenWeather API
* **Smart Outfit Suggestions** - Receive clothing recommendations tailored to the day's weather conditions
* **Clean, Minimalist UI** - Simple and intuitive interface that gets you the information you need quickly
* **Responsive Design** - Works seamlessly across desktop and mobile devices

### **Tech Stack**
---
* Next.js - React framework for production
* Tailwind CSS - Utility-first CSS framework
* OpenWeather API - Weather data provider

### **Getting Started**
---
*Prerequisites*

* Node.js 16.x or higher
* npm or yarn
* OpenWeather API key (Get one here)

### **Installation**
---
1. Clone the repository

* git clone
  ```js
  https://github.com/IdyegeNathaniel/fitforecast.git
  ```

2. Change to project directory
```js 
cd fitforecast
```

3. Install dependencies

```js
npm install
```
 or
```js
yarn install
```

4. Create a .env.local file in the root directory and add your OpenWeather API key

* env NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here

5. Run the development server

```js
npm run dev
```
or
```js
yarn dev
```

* Open on your browser
  http://localhost:3000
  
### **Usage**
---
* The app will request your location permission to provide local weather data
* View the current weather forecast for your area
* Check the suggested outfit based on temperature, conditions, and time of day
  
### **Building for Production**
---
* npm run build
* npm start

### **Contributing**
---
Contributions are welcome! Please feel free to submit a Pull Request.
