const UrlBase = "https://api.openweathermap.org/data/2.5/weather";
const ApiKey = "221b2bd4645280681a981b6986de177d";
const btnCiudad = document.querySelector('#btnCiudad');
const inputCity = document.querySelector('#city');

const fetchApi = url => fetch(url).then(response => response.json());

 async function getClima(lat, lon, apikey){
    const url = `${ UrlBase }?lat=${ lat }&lon=${ lon }&appid=${ apikey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    pintaFondo(temperature);
    document.querySelector('#left h3').innerHTML = clima.name ;
    document.querySelector('#left h3').innerHTML = `${ temperature }°C`;
    pintaFondo(temperature);
    pintaTemp(temperature);
}

async function getClimaByCity(city, apiKey){
    const url = `${ UrlBase }?q=${ city }&appid=${ apiKey }`;
    const clima = await fetchApi(url);
    console.log(clima);
    document.querySelector('#left h2').innerHTML = clima.name;
    const temperature = (clima.main.temp - 273.15).toFixed(2);
    pintaFondo(temperature);
    document.querySelector('#left h3').innerHTML = clima.name ;
    document.querySelector('#left h3').innerHTML = `${ temperature }°C`;
    pintaFondo(temperature);
    pintaTemp(temperature);
}

function pintaTemp(temp){
    const h3 = document.querySelector('h3');
    if(temp < 15){
        h3.innerHTML = `${ temp }°C ❄️`;
    }else if (temp < 23){
        h3.innerHTML = `${ temp }°C 🌤️`;
    }else{
        h3.innerHTML = `${ temp }°C ☀️`;
    }
} 

function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if(temp < 15){
        fondo.style.background = '#a8f3da';
    } else if (temp <= 22){
        fondo.style.background = '#FFFF88';
    } else {
        fondo.style.background = "rgb(255, 189, 127)";
    }
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon, ApiKey);
    }
)

btnCiudad.addEventListener('click', () => {
    const city = inputCity.value;
    if(city){
        getClimaByCity(city, ApiKey);
    }
});