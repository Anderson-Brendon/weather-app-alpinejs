let apiKey = '' //adicione sua chave api do open-weather

async function request_weather_data(cityName){
    cityName = cityName.replace(" ", "+");
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`,{
        method: "GET",
        headers: { "Content-Type": "application/json" },
    }).then(
        response => response.json()
    ).then(
        data => data
    )   
}


function changeSrc(id){
    let img = document.querySelector("img");
    let size = "@3x.png";
    img.src = `https://openweathermap.org/img/wn/${id}${size}`;
}