// Övning 4: Bygg en liten app med fetch()

// Skapa en enkel applikation som:
// Hämtar väderdata från OpenWeatherMap API.
// Visar temperatur, väderbeskrivning och plats.

// Tips:
// Läs API-dokumentationen för OpenWeatherMap.
// Använd en gratis API-nyckel för autentisering.
fetch("https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=76018c822679e0345566e2c8fe66b329&units=metric")
.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP fel, status: ${response.status}`);
    }
    // console.log("response: ", response.json());
    return response.json();
    

})
.then((data) => {
    let position = document.querySelector("p");
    position.innerText =`Stad: ${data.name}, Temperatur: ${data.main.temp}C, Väderbeskrivning: ${data.weather[0].description}`;
    // console.log(`Stad: ${data.name}`);
    // console.log(`Temperatur: ${data.main.temp}C`);
    // console.log(`Väderbeskrivning: ${data.weather[0].description}`);

    

})
.catch((err) => {
    console.error("err: ", err);
});