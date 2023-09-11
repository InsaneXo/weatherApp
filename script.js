// Side bar JavaScript.

let menu_btn = document.getElementById('menu-btn');
let close_btn = document.getElementById('close-btn');
let sidebar = document.querySelector('.sidebar')
let allNav = document.querySelectorAll('.nav-bar2 a');
let allSec = document.querySelector('.all-sec')


let signUpBtn = document.getElementById("signUp");
let signInBtn = document.getElementById("signIn");
function signUp() {
    signUpBtn.style.right = "290px";
    signInBtn.style.right = "270px";

}

function signIn() {
    signUpBtn.style.right = "-2px";
    signInBtn.style.right = "-3px";
}

const login = () => {
    let userLogin = document.querySelector('.userLogin')
    let closeLogin = document.querySelector('#closeLogin')

    setTimeout(() => {
        userLogin.classList.toggle('none')
    }, 7000)

    closeLogin.addEventListener('click', () => {
        userLogin.classList.toggle('none')
    })

}



login();


allNav.forEach((Navs) => {
    Navs.addEventListener('click', () => {
        sidebar.classList.toggle('active')
        allSec.classList.toggle('blur')
    })
})

menu_btn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    allSec.classList.toggle('blur')
})

close_btn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    allSec.classList.toggle('blur')
})

// Forecast weather event listers

const forecast = () => {
    const forecast_day = document.querySelectorAll('.forecast-day');
    const allBtn = document.querySelector('.for-btn')

    Array.from(forecast_day).forEach((AllForecast) => {
        allBtn.addEventListener('click', () => {
            AllForecast.classList.toggle('height')
        })
    })
}

forecast();

// Show Real Time 
const showTime = () => {
    let today = new Date();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let status = document.querySelector('#am-pm');
    let day = today.getDay();
    let daylist = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"]
    let date = today.getDate();
    let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = today.getMonth();

    if (hours > 11) {
        status.innerHTML = 'PM'
    }
    else {
        status.innerHTML = 'AM'
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    hours = hours < 10 ? '0' + hours : hours
    mins = mins < 10 ? '0' + mins : mins
    date = date < 10 ? '0' + date : date


    document.querySelector('#hrs').innerHTML = hours + ':';
    document.querySelector('#min').innerHTML = mins;
    document.querySelector('#day').innerHTML = daylist[day];
    document.querySelector('#date').innerHTML = date;
    document.querySelector('#month').innerHTML = monthList[month];


}

showTime();

setInterval(() => {
    showTime();
}, 1000);

// Data fetching through OpenWeather API.
let Search_box = document.querySelector('#Search-box')
let SearchBtn = document.querySelector('#SearchBtn')

window.addEventListener('load', () => {
    Search_box.value = ""
})

const weather = async (cityName) => {
    let apiKey = '7c58888a70ac91cf0997efbb3bc7f1c1'
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
    let today = new Date();
    let hours = today.getHours();
    let popOut = document.querySelector('.popOut');
    let all_sec = document.querySelector('.all-sec')

    const response = await fetch(apiURL + cityName + `&appid=${apiKey}`);

    if (response.status == 404) {
        popOut.classList.toggle('none')
        allSec.classList.toggle('none')
        setTimeout(() => {
            popOut.classList.toggle('none')
            all_sec.classList.toggle('none')
        }, 4000)
    }
    else {

        let data = await response.json();
        console.log(data)


        if (data.weather[0].main == 'Rain') {
            if (hours >= 21) {
                weatherstatusimg.src = 'weather-app-img/images/rainNight.png'
            }
            else {
                weatherstatusimg.src = 'weather-app-img/images/rain.png'
            }
        }
        else if (data.weather[0].main == 'Thunderstorm') {
            if (hours >= 20) {
                weatherstatusimg.src = 'weather-app-img/images/thunderNight.png'
            }
            else {
                weatherstatusimg.src = 'weather-app-img/images/thunderstorm.png'
            }
        }
        else if (data.weather[0].main == 'Drizzle') {
            if (hours >= 20) {
                weatherstatusimg.src = 'weather-app-img/images/drizzleNight.png'
            }
            else {
                weatherstatusimg.src = 'weather-app-img/images/drizzle.png'
            }
        }
        else if (data.weather[0].main == 'Snow') {
            weatherstatusimg.src = 'weather-app-img/images/snow.png'
        }
        else if (data.weather[0].main == 'Clear') {
            if (hours >= 20) {
                weatherstatusimg.src = 'weather-app-img/images/moon.png'
            }
            else {
                weatherstatusimg.src = 'weather-app-img/images/clear.png'
            }
        }
        else if (data.weather[0].main == 'Clouds') {
            if (hours >= 20) {
                weatherstatusimg.src = 'weather-app-img/images/nightClouds.png'
            }
            else {
                weatherstatusimg.src = 'weather-app-img/images/clouds.png'
            }
        }
        else if (data.weather[0].main == 'Mist') {
            if (hours >= 20) {
                weatherstatusimg.src = 'weather-app-img/images/mistNight.png'
            }
            else {
                weatherstatusimg.src = 'weather-app-img/images/mist.png'
            }
        }
        else if (data.weather[0].main == 'Smoke') {
            weatherstatusimg.src = 'weather-app-img/images/smoke.png'
        }
        else if (data.weather[0].main == 'Haze') {
            if (hours >= 20) {
                weatherstatusimg.src = 'weather-app-img/images/hazeNight.png'
            }
            else {
                weatherstatusimg.src = 'weather-app-img/images/haze.png'
            }
        }
        else if (data.weather[0].main == 'Dust') {
            weatherstatusimg.src = 'weather-app-img/images/dust.png'
        }
        else if (data.weather[0].main == 'Fog') {
            weatherstatusimg.src = 'weather-app-img/images/fog.png'
        }
        else if (data.weather[0].main == 'Sand') {
            weatherstatusimg.src = 'weather-app-img/images/sand.png'
        }
        else if (data.weather[0].main == 'Ash') {
            weatherstatusimg.src = 'weather-app-img/images/volcanic.png'
        }
        else if (data.weather[0].main == 'Squall') {
            weatherstatusimg.src = 'weather-app-img/images/tornado.png'
        }
        else if (data.weather[0].main == 'Tornado') {
            weatherstatusimg.src = 'weather-app-img/images/tornado.png'
        }

        let sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-us', {
            hour: 'numeric',
            minute: 'numeric'
        })
        let sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-us', {
            hour: 'numeric',
            minute: 'numeric'
        })

        



        document.querySelector('#Weather-City').innerHTML = data.name;
        document.querySelector('#Weather-des').innerHTML = data.weather[0].description
        document.querySelector('#Temp-Details').innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector('#Weather-info').innerHTML = data.weather[0].main
        document.querySelector('#max-temp').innerHTML = Math.floor(data.main.temp_max) + "°C"
        document.querySelector('#min-temp').innerHTML = Math.floor(data.main.temp_min) + "°C"
        document.querySelector('#Humidity-Cities').innerHTML = data.main.humidity + " %"
        document.querySelector('#wind-cities').innerHTML = data.wind.speed + ' Km/hr'
        document.querySelector('#pressure-cities').innerHTML = data.main.pressure + ' hPa'
        document.querySelector('#sunrise-cities').innerHTML = sunrise
        document.querySelector('#sunset-cities').innerHTML = sunset
    }
}

// Forcasting weather

const weatherForcast = async (cityName) => {
    let apiKey = '7c58888a70ac91cf0997efbb3bc7f1c1'
    let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?&units=metric&q='
    const forecastdata = await fetch(apiURL + cityName + `&appid=${apiKey}`);

    if (forecastdata.status == 404) {
        console.log('Invaid Search')
    }
    else {

        let dataforcast = await forecastdata.json()
        // Forecast 1
        let a = new Date(dataforcast.list[7].dt * 1000).toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'long',
            weekday: 'long'
        })
        document.querySelector('#forcast-date1').innerHTML = a;
        if (dataforcast.list[7].weather[0].main == 'Rain') {
            forcastImg.src = 'weather-app-img/images/rain.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Thunderstorm') {
            forcastImg.src = 'weather-app-img/images/thunderstorm.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Drizzle') {
            forcastImg.src = 'weather-app-img/images/drizzle.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Snow') {
            forcastImg.src = 'weather-app-img/images/snow.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Clear') {
            forcastImg.src = 'weather-app-img/images/clear.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Clouds') {
            forcastImg.src = 'weather-app-img/images/clouds.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Mist') {
            forcastImg.src = 'weather-app-img/images/mist.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Smoke') {
            forcastImg.src = 'weather-app-img/images/smoke.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Haze') {
            forcastImg.src = 'weather-app-img/images/haze.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Dust') {
            forcastImg.src = 'weather-app-img/images/dust.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Fog') {
            forcastImg.src = 'weather-app-img/images/fog.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Sand') {
            forcastImg.src = 'weather-app-img/images/sand.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Ash') {
            forcastImg.src = 'weather-app-img/images/volcanic.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Squall') {
            forcastImg.src = 'weather-app-img/images/tornado.png'
        }
        else if (dataforcast.list[7].weather[0].main == 'Tornado') {
            forcastImg.src = 'weather-app-img/images/tornado.png'
        }
        document.querySelector('#forecast-status1').innerHTML = dataforcast.list[7].weather[0].main
        document.querySelector('#forecast-temp1').innerHTML = Math.floor(dataforcast.list[7].main.temp) + "°C"
        document.querySelector('#forecast-max-temp1').innerHTML = Math.floor(dataforcast.list[7].main.temp_max) + "°C"
        document.querySelector('#forecast-min-temp1').innerHTML = Math.floor(dataforcast.list[7].main.temp_min) + "°C"
        document.querySelector('#forecast-humidity1').innerHTML = dataforcast.list[7].main.humidity + " %"
        document.querySelector('#forecast-wind1').innerHTML = dataforcast.list[7].wind.speed + " km/hr"
        document.querySelector('#forecast-pressure1').innerHTML = dataforcast.list[7].main.pressure + " hPa"
        // Forecast 2
        let b = new Date(dataforcast.list[15].dt * 1000).toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'long',
            weekday: 'long'
        })
        document.querySelector('#forcast-date2').innerHTML = b;
        if (dataforcast.list[15].weather[0].main == 'Rain') {
            forcastImg2.src = 'weather-app-img/images/rain.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Thunderstorm') {
            forcastImg2.src = 'weather-app-img/images/thunderstorm.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Drizzle') {
            forcastImg2.src = 'weather-app-img/images/drizzle.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Snow') {
            forcastImg2.src = 'weather-app-img/images/snow.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Clear') {
            forcastImg2.src = 'weather-app-img/images/clear.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Clouds') {
            forcastImg2.src = 'weather-app-img/images/clouds.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Mist') {
            forcastImg2.src = 'weather-app-img/images/mist.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Smoke') {
            forcastImg2.src = 'weather-app-img/images/smoke.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Haze') {
            forcastImg2.src = 'weather-app-img/images/haze.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Dust') {
            forcastImg2.src = 'weather-app-img/images/dust.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Fog') {
            forcastImg2.src = 'weather-app-img/images/fog.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Sand') {
            forcastImg2.src = 'weather-app-img/images/sand.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Ash') {
            forcastImg2.src = 'weather-app-img/images/volcanic.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Squall') {
            forcastImg2.src = 'weather-app-img/images/tornado.png'
        }
        else if (dataforcast.list[15].weather[0].main == 'Tornado') {
            forcastImg2.src = 'weather-app-img/images/tornado.png'
        }
        document.querySelector('#forecast-status2').innerHTML = dataforcast.list[15].weather[0].main
        document.querySelector('#forecast-temp2').innerHTML = Math.floor(dataforcast.list[15].main.temp) + "°C"
        document.querySelector('#forecast-max-temp2').innerHTML = Math.floor(dataforcast.list[15].main.temp_max) + "°C"
        document.querySelector('#forecast-min-temp2').innerHTML = Math.floor(dataforcast.list[15].main.temp_min) + "°C"
        document.querySelector('#forecast-humidity2').innerHTML = dataforcast.list[15].main.humidity + " %"
        document.querySelector('#forecast-wind2').innerHTML = dataforcast.list[15].wind.speed + " km/hr"
        document.querySelector('#forecast-pressure2').innerHTML = dataforcast.list[15].main.pressure + " hPa"
        // Forecast 3
        let c = new Date(dataforcast.list[23].dt * 1000).toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'long',
            weekday: 'long'
        })
        document.querySelector('#forcast-date3').innerHTML = c;

        if (dataforcast.list[23].weather[0].main == 'Rain') {
            forcastImg3.src = 'weather-app-img/images/rain.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Thunderstorm') {
            forcastImg3.src = 'weather-app-img/images/thunderstorm.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Drizzle') {
            forcastImg3.src = 'weather-app-img/images/drizzle.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Snow') {
            forcastImg3.src = 'weather-app-img/images/snow.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Clear') {
            forcastImg3.src = 'weather-app-img/images/clear.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Clouds') {
            forcastImg3.src = 'weather-app-img/images/clouds.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Mist') {
            forcastImg3.src = 'weather-app-img/images/mist.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Smoke') {
            forcastImg3.src = 'weather-app-img/images/smoke.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Haze') {
            forcastImg3.src = 'weather-app-img/images/haze.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Dust') {
            forcastImg3.src = 'weather-app-img/images/dust.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Fog') {
            forcastImg3.src = 'weather-app-img/images/fog.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Sand') {
            forcastImg3.src = 'weather-app-img/images/sand.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Ash') {
            forcastImg3.src = 'weather-app-img/images/volcanic.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Squall') {
            forcastImg3.src = 'weather-app-img/images/tornado.png'
        }
        else if (dataforcast.list[23].weather[0].main == 'Tornado') {
            forcastImg3.src = 'weather-app-img/images/tornado.png'
        }
        document.querySelector('#forecast-status3').innerHTML = dataforcast.list[23].weather[0].main
        document.querySelector('#forecast-temp3').innerHTML = Math.floor(dataforcast.list[23].main.temp) + "°C"
        document.querySelector('#forecast-max-temp3').innerHTML = Math.floor(dataforcast.list[23].main.temp_max) + "°C"
        document.querySelector('#forecast-min-temp3').innerHTML = Math.floor(dataforcast.list[23].main.temp_min) + "°C"
        document.querySelector('#forecast-humidity3').innerHTML = dataforcast.list[23].main.humidity + " %"
        document.querySelector('#forecast-wind3').innerHTML = dataforcast.list[23].wind.speed + " km/hr"
        document.querySelector('#forecast-pressure3').innerHTML = dataforcast.list[23].main.pressure + " hPa"
        // Forecast 4
        let d = new Date(dataforcast.list[31].dt * 1000).toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'long',
            weekday: 'long'
        })

        if (dataforcast.list[31].weather[0].main == 'Rain') {
            forcastImg4.src = 'weather-app-img/images/rain.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Thunderstorm') {
            forcastImg4.src = 'weather-app-img/images/thunderstorm.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Drizzle') {
            forcastImg4.src = 'weather-app-img/images/drizzle.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Snow') {
            forcastImg4.src = 'weather-app-img/images/snow.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Clear') {
            forcastImg4.src = 'weather-app-img/images/clear.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Clouds') {
            forcastImg4.src = 'weather-app-img/images/clouds.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Mist') {
            forcastImg4.src = 'weather-app-img/images/mist.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Smoke') {
            forcastImg4.src = 'weather-app-img/images/smoke.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Haze') {
            forcastImg4.src = 'weather-app-img/images/haze.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Dust') {
            forcastImg4.src = 'weather-app-img/images/dust.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Fog') {
            forcastImg4.src = 'weather-app-img/images/fog.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Sand') {
            forcastImg4.src = 'weather-app-img/images/sand.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Ash') {
            forcastImg4.src = 'weather-app-img/images/volcanic.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Squall') {
            forcastImg4.src = 'weather-app-img/images/tornado.png'
        }
        else if (dataforcast.list[31].weather[0].main == 'Tornado') {
            forcastImg4.src = 'weather-app-img/images/tornado.png'
        }
        document.querySelector('#forecast-status4').innerHTML = dataforcast.list[31].weather[0].main
        document.querySelector('#forecast-temp4').innerHTML = Math.floor(dataforcast.list[31].main.temp) + "°C"
        document.querySelector('#forecast-max-temp4').innerHTML = Math.floor(dataforcast.list[31].main.temp_max) + "°C"
        document.querySelector('#forecast-min-temp4').innerHTML = Math.floor(dataforcast.list[31].main.temp_min) + "°C"
        document.querySelector('#forecast-humidity4').innerHTML = dataforcast.list[31].main.humidity + " %"
        document.querySelector('#forecast-wind4').innerHTML = dataforcast.list[31].wind.speed + " km/hr"
        document.querySelector('#forecast-pressure4').innerHTML = dataforcast.list[31].main.pressure + " hPa"
        // Forecast 5
        document.querySelector('#forcast-date4').innerHTML = d;
        let e = new Date(dataforcast.list[39].dt * 1000).toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'long',
            weekday: 'long'
        })
        document.querySelector('#forcast-date5').innerHTML = e;

        if (dataforcast.list[39].weather[0].main == 'Rain') {
            forcastImg5.src = 'weather-app-img/images/rain.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Thunderstorm') {
            forcastImg5.src = 'weather-app-img/images/thunderstorm.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Drizzle') {
            forcastImg5.src = 'weather-app-img/images/drizzle.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Snow') {
            forcastImg5.src = 'weather-app-img/images/snow.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Clear') {
            forcastImg5.src = 'weather-app-img/images/clear.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Clouds') {
            forcastImg5.src = 'weather-app-img/images/clouds.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Mist') {
            forcastImg5.src = 'weather-app-img/images/mist.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Smoke') {
            forcastImg5.src = 'weather-app-img/images/smoke.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Haze') {
            forcastImg5.src = 'weather-app-img/images/haze.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Dust') {
            forcastImg5.src = 'weather-app-img/images/dust.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Fog') {
            forcastImg5.src = 'weather-app-img/images/fog.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Sand') {
            forcastImg5.src = 'weather-app-img/images/sand.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Ash') {
            forcastImg5.src = 'weather-app-img/images/volcanic.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Squall') {
            forcastImg5.src = 'weather-app-img/images/tornado.png'
        }
        else if (dataforcast.list[39].weather[0].main == 'Tornado') {
            forcastImg5.src = 'weather-app-img/images/tornado.png'
        }
        document.querySelector('#forecast-status5').innerHTML = dataforcast.list[39].weather[0].main
        document.querySelector('#forecast-temp5').innerHTML = Math.floor(dataforcast.list[39].main.temp) + "°C"
        document.querySelector('#forecast-max-temp5').innerHTML = Math.floor(dataforcast.list[39].main.temp_max) + "°C"
        document.querySelector('#forecast-min-temp5').innerHTML = Math.floor(dataforcast.list[39].main.temp_min) + "°C"
        document.querySelector('#forecast-humidity5').innerHTML = dataforcast.list[39].main.humidity + " %"
        document.querySelector('#forecast-wind5').innerHTML = dataforcast.list[39].wind.speed + " km/hr"
        document.querySelector('#forecast-pressure5').innerHTML = dataforcast.list[39].main.pressure + " hPa"

    }
}

// news API

const newsAPI = async (cityName) => {
    let apiURL = 'https://newsapi.org/v2/everything?q='
    let apiKey = '871fce6a64384c40aaba5fbf44d5d85a'




    const response = await fetch(`${apiURL}${cityName} weather&apiKey=${apiKey}`);
    if (response.status === 426) {
        // Handle the upgrade requirement here
        console.log('Upgrade Required. Switch to newer protocol.');
        // Update networking configuration and retry the request
    }
    else {

        let data = await response.json();
        const articles = data.articles;
        bindData(articles);
    }

}

const bindData = async (articles) => {
    const cardsContainer = document.getElementById('card-container');
    const templateContainer = document.getElementById('template-news-card');
    let arts = await articles;

    cardsContainer.innerHTML = '';

    arts.forEach((article) => {
        if (!article.urlToImage) return;
        const cardclone = templateContainer.content.cloneNode(true);
        filldata(cardclone, article)
        cardsContainer.appendChild(cardclone);
    })
}


const filldata = (cardclone, article) => {
    const newsImg = cardclone.querySelector('#news-img')
    const newsTitle = cardclone.querySelector('#news-title')
    const newsSource = cardclone.querySelector('#news-time')
    const newsDesc = cardclone.querySelector('#news-des')
    const readBtn = cardclone.querySelectorAll('#visit-btn')

    newsImg.src = article.urlToImage
    newsTitle.innerHTML = article.title
    let date = new Date(article.publishedAt).toLocaleString('en-US', {
        timeZone: 'Asia/Jakarta'
    })
    newsSource.innerHTML = `${article.source.name} • ${date}`
    newsDesc.innerHTML = article.description;

    readBtn.forEach((all_btns) => {
        all_btns.addEventListener('click', () => {
            window.open(article.url, '_blank')
        })
    })
}



// newsAPI('Noida');
// weather('Noida');
// weatherForcast('Noida');

SearchBtn.addEventListener('click', () => {
    newsAPI(Search_box.value);
    weather(Search_box.value);
    weatherForcast(Search_box.value);
    Search_box.value = ""
})



