let weather = {
    apikey : "b8d9e35f10e49b5a9219d9d1623bea76",

    //Fetching Weather Information 
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=b8d9e35f10e49b5a9219d9d1623bea76&units=metric")
        .then((response)=> response.json())
        .then((data)=> this.display(data));
    },
    display: function(data){
        //Data Extraction
        const {name} = data;
        const {temp,humidity} = data.main;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        console.log(name, temp, humidity, icon, description, speed);
        //Data Display
        document.querySelector(".city").innerText ="Weather in " + name;
        document.querySelector(".temp").innerText = temp+"°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind Speed : "+speed+"km/hour";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+description+"')"
    },

}
$(document).ready(function(){
    $("#s-btn").click(function(){ //Search Button
      x =  $("#search-bar").val();
      weather.fetchWeather(x);


    })
    $("#search-bar").keydown(function(e){
        if(e.keyCode == 13 ){ //Enter Key
            x =  $("#search-bar").val();
            weather.fetchWeather(x);
        }
    })
})
