# Weather-App With React
By Daniel Wong

This is a weather app created using the React framework.  
All weather information is fetched using the OpenWeatherMap API and Open-Meteo's Air Quality API and Weather Forecast API.  
Users can search up a city and receive information about the current temperature, air quality and forecast, along with more detailed information about each such as humidity and polutant concentrations.

__Video link__: [Project Presentation](https://drive.google.com/file/d/1GOdsp3k86rDWT5rwN0miR6xCTOVGYKiF/view?usp=sharing)

## Steps for Running
1. Install Node.js (and npm) via Installer:
* Go to the [official Node.js website](https://nodejs.org/en)
* Go up to "Download" then go to "Prebuilt Installer"
* Choose the appropriate OS and then press the download button
* Go through the pages and accept terms in the Installation Wizard
* To check whether Node.js was properly installed run ```node -v``` in your terminal
* Similarly, to check whether npm was properly installed run ```npm -v``` in your terminal <br><br>

2. Obtain OpenWeatherMap API
* Go to [OpenWeatherMap.org](https://openweathermap.org/)
* Sign in or create a free account if you are new
* Once signed in, go up to your profile and select "My API keys"
* You will see a default API key appear. You can either use the default API key or generate a new API key
* __Note:__ if the default API key or generated API key was just created, it may take a few hours for them to be activated and ready to use <br><br>

3. Replace API Key in Code
* Copy an API key from your OpenWeatherMap account
* In the ```src``` folder, select the ```App.js``` file
* In ```const api_key``` replace ```ENTER YOUR API KEY HERE``` with your API key and save<br><br>

4. Use npm To Run
* With your terminal or command prompt in the location of where you stored the weather-info-app, run the command ```npm start```
* A browser window should pop up with localhost:3000 and the app is ready to use