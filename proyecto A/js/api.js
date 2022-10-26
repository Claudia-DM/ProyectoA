function climaHoy (clima){
    var resultado = document.querySelector('#climaLocal');

    // var ciudad = document.createElement("span");
    // ciudad.textContent = clima.name;
    // resultado.append(ciudad);

    var temperatura = document.createElement("span");
    temperatura.textContent = " Temp: " + clima.main.temp + "°C";
    resultado.append(temperatura);

    var cielo = document.createElement("span");
    cielo.textContent = " " + clima.weather[0].description ;
    resultado.append(cielo);

    
    var icono = document.createElement("img");
    icono.setAttribute('class','iconoClima');
    icono.setAttribute('src',`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`);
    resultado.append(icono);
    
    
    var humedad = document.createElement("span");
   humedad.textContent = " Humedad: " + clima.main.humidity + "%" ;
    resultado.append(humedad);



}


function fetchClima(query){
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&lang=es&appid=c99913a22c3634406bb24e0ae38bbdd9&units=metric";

    fetch(url)
    .then ((response) => response.json())
    .then ((data) => climaHoy(data));
}

fetchClima("San Luis");