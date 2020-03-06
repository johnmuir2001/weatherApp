

const btn = document.getElementById("weather-btn")
const input = document.getElementById("location")
const city = document.getElementById("city")
const wrap = document.getElementById("wrap")
const weatherTitle = document.getElementById("weatherTitle")

const sun = document.getElementById("sun")
const cloudWrap = document.getElementById("cloudWrap")
const cloudWrap2 = document.getElementById("cloudWrap2")
const rain = document.getElementById("rainWrap")

const cloudTitle = document.getElementById("cloudTitle")
const cloud = document.getElementById("cloud")
const tempTitle = document.getElementById("tempTitle")
const temp = document.getElementById("temp")
const windTitle = document.getElementById("windTitle")
const wind = document.getElementById("wind")



const sky = () => {
    var today = new Date().getHours();

    if(today > 0 && today < 5){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(1,4,27,1) 12%, rgba(0,20,113,1) 100%)";
        wrap.style.setProperty('--card-color', 'rgb(0, 50, 130)');
        document.documentElement.style.setProperty('--sun-color', '#f0faff');
    } else if(today >= 5 && today < 9){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(255,212,123,1) 20%, rgba(76,144,255,1) 100%)";
        wrap.style.setProperty('--card-color', 'rgb(107, 163, 255)');
    } else if(today >= 9 && today < 18){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(125, 226, 255,1) 0%, rgba(194, 242, 255,1) 72%)";
        wrap.style.setProperty('--card-color', 'rgb(136, 211, 255)');
    } else if(today >= 18 && today < 20){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(255,212,123,1) 19%, rgba(183,121,247,1) 52%, rgba(76,144,255,1) 100%)";
        wrap.style.setProperty('--card-color', 'rgb(150, 197, 255)');
    } else if(today >=   20 && today < 24){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(1,4,27,1) 12%, rgba(0,20,113,1) 100%)";
        wrap.style.setProperty('--card-color', 'rgb(0, 50, 130)');
        document.documentElement.style.setProperty('--sun-color', '#f0faff');
}
}

sky()


btn.addEventListener('click', async () => {
    const response = await fetch(`/weather?address=${input.value}`)
    const result = await response.json()
    if (result.error){
        console.log(result.error)
        city.textContent = result.error
    } else {
        console.log(result)
        weatherTitle.style.display = "none"
        city.textContent = result.location
        cloudTitle.textContent = "Cloud Coverage:"
        cloud.textContent = result.data.summary
        tempTitle.textContent = "Temperature:"
        temp.textContent = `${((result.data.temperature - 32)*5/9).toFixed(2)}°C`
        windTitle.textContent = "Wind Speed:"
        wind.textContent = `${result.data.windSpeed}mph`
        if(result.data.icon == "clear-day"){
            sun.style.display = "block"
            cloudWrap.style.display = "none"
            cloudWrap2.style.display = "none"
            rain.style.display = "none"
        } else if(result.data.icon == "clear-night"){
            sun.style.display = "block"
            cloudWrap.style.display = "none"
            cloudWrap2.style.display = "none"
            rain.style.display = "none"
            document.documentElement.style.setProperty('--sun-color', '#ffffff');
        } else if(result.data.icon == "rain" || result.data.icon == "sleet"){
            document.documentElement.style.setProperty('--cloud-color', '#ababab');
            sun.style.display = "none"
            cloudWrap.style.display = "block"
            cloudWrap2.style.display = "none"
            rain.style.display = "block"
            document.documentElement.style.setProperty('--sun-color', '#ffd058 ');
        } else if(result.data.icon == "fog"){
            sun.style.display = "none"
            cloudWrap.style.display = "block"
            cloudWrap2.style.display = "block"
            rain.style.display = "none"
            document.documentElement.style.setProperty('--sun-color', '#ffd058 ');
        } else if(result.data.icon == "cloudy"){
            sun.style.display = "none"
            cloudWrap.style.display = "block"
            cloudWrap2.style.display = "block"
            document.documentElement.style.setProperty('--cloud-color', '#ababab');
            rain.style.display = "none"
            document.documentElement.style.setProperty('--sun-color', '#ffd058 ');
        } else if(result.data.icon == "partly-cloudy-day"){
            sun.style.display = "block"
            cloudWrap.style.display = "block"
            cloudWrap2.style.display = "none"
            document.documentElement.style.setProperty('--cloud-color', '#ffffff');
            rain.style.display = "none"
            document.documentElement.style.setProperty('--sun-color', '#ffd058 ');
        } else if(result.data.icon == "partly-cloudy-night"){
            sun.style.display = "block"
            cloudWrap.style.display = "block"
            cloudWrap2.style.display = "none"
            document.documentElement.style.setProperty('--cloud-color', '#ffffff');
            rain.style.display = "none"
            document.documentElement.style.setProperty('--sun-color', '#f0faff');
        }
    }
})