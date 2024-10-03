let searchBtn=document.getElementById('searchBtn');
let cityName=document.getElementById('cityName');
let cityInput=document.getElementById('cityInput');
let tempreature=document.getElementById('tempreature');
let weather=document.getElementById('weather');
let humidity=document.getElementById('humidity');
let wind=document.getElementById('wind');
let weatherinfo=document.querySelector('.weather-info');
let loading=document.getElementById('loading');


searchBtn.addEventListener('click',()=>{
    const city=cityInput.value;
    

    if (city) {
        featchweather(city);
    }

});

async function featchweather(city) {
    const url = `https://wttr.in/${city}?format=j1`;

    try {
        loading.style.display='block';
        const response=await fetch(url);
        if (!response.ok) {
            throw new Error('City not Found')
            
        }
        const data=await response.json();
        displayWeather(data);
        loading.style.display='none';
        
    } catch (error) {
        loading.innerHTML=`Something wrong try later`;
        console.log(error.message) ;      
    }
    
};

function displayWeather(data){
    const currentCondition=data.current_condition[0];
    cityName.textContent=data.nearest_area[0].areaName[0].value;
    tempreature.textContent=`Tempreature: ${currentCondition.temp_C}℃`;
    weather.textContent=`Weather: ${currentCondition.weatherDesc[0].value}`;
    humidity.textContent=`Humidity: ${currentCondition.humidity}%`;
    wind.textContent=`Wind Speed: ${currentCondition.windspeedKmph}Km/hr`;
    weatherinfo.style.display='block';

};
