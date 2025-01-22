$(document).ready(function() {
    $("#Valuta").click(function() {
        // Ottieni il valore dell'input city
        var city = $("#city").val();

        // URL dell'API con il nome della città
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=96ce7b79e93af0894a6f20f7619264f8&units=metric&lang=it";

        // Richiesta GET all'API
        $.get(url, function(data) {
            // Estrarre i dati
            var cityName = data.name;
            var country = data.sys.country;
            var temperature = data.main.temp;
            var feelsLike = data.main.feels_like;
            var weatherDescription = data.weather[0].description;
            var humidity = data.main.humidity;
            var windSpeed = data.wind.speed;

            // Costruire il risultato formattato
            var resultHTML = `
                <h2>Meteo per ${cityName}, ${country}</h2>
                <p><strong>Descrizione:</strong> ${weatherDescription}</p>
                <p><strong>Temperatura:</strong> ${temperature}°C</p>
                <p><strong>Percepita:</strong> ${feelsLike}°C</p>
                <p><strong>Umidità:</strong> ${humidity}%</p>
                <p><strong>Vento:</strong> ${windSpeed} m/s</p>
            `;

            // Mostrare il risultato
            $("#result").html(resultHTML).show();
        }).fail(function() {
            // Gestione degli errori
            $("#result").html("<p>Errore: impossibile recuperare i dati. Controlla il nome della città.</p>").show();
        });
    });
});
