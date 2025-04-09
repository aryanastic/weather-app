$(document).ready(function() {
    $("#getWeather").click(function() {
      var city = $("#cityInput").val();
      var apiKey = "72803136f8e7293e8951e4aa15412739"; 
      var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      $.ajax({
        url: apiURL,
        method: "GET",
        success: function(data) {
          $("#cityName").text(data.name);
          $("#temperature").text("Temperature: " + data.main.temp + "°C");
          $("#description").text("Condition: " + data.weather[0].description);
          $("#icon").attr("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
  
          $("#weatherResult").removeClass("hidden");
          var condition = data.weather[0].main.toLowerCase();
changeBackground(condition);

        },
        error: function() {
          alert("City not found! Please try again.");
        }
      });
    });
  });
  function changeBackground(condition) {
    let backgroundUrl = "";
  
    if (condition.includes("cloud")) {
      backgroundUrl = "url('images/cloudy.jpg')";
    } else if (condition.includes("rain")) {
      backgroundUrl = "url('images/rainy.jpg')";
    } else if (condition.includes("clear")) {
      backgroundUrl = "url('images/sunny.jpg')";
    } else if (condition.includes("snow")) {
      backgroundUrl = "url('images/snowy.jpg')";
    } else if (condition.includes("thunderstorm")) {
      backgroundUrl = "url('images/storm.jpg')";
    } else if (condition.includes("mist") || condition.includes("fog")) {
      backgroundUrl = "url('images/foggy.jpg')";
    } else {
      backgroundUrl = "url('images/default.jpg')"; 
    }
  
    $("body").css({
      "background-image": backgroundUrl,
      "background-size": "cover",
      "background-position": "center",
      "transition": "background-image 0.5s ease"
    });
  }
  
  