

const btn = document.getElementById("weather-btn")
const input = document.getElementById("location")
const city = document.getElementById("city")
const wrap = document.getElementById("wrap")

const cloudTitle = document.getElementById("cloudTitle")
const cloud = document.getElementById("cloud")
const tempTitle = document.getElementById("tempTitle")
const temp = document.getElementById("temp")
const windTitle = document.getElementById("windTitle")
const wind = document.getElementById("wind")



const sky = () => {
    var today = new Date().getHours();

    if(today > 0 && today < 5){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(1,4,27,1) 12%, rgba(0,20,113,1) 100%);"
        wrap.style.backgroundColor = "rgb(0, 50, 130)"
    } else if(today > 5 && today < 7){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(255,231,145,1) 14%, rgba(255,157,76,1) 100%);"
        wrap.style.backgroundColor = "rgb(255, 148, 61)"
    } else if(today > 7 && today < 9){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(255,212,123,1) 20%, rgba(76,144,255,1) 100%);"
        wrap.style.backgroundColor = "rgb(255,212,123)"
    } else if(today > 9 && today < 18){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(125, 226, 255,1) 0%, rgba(194, 242, 255,1) 72%)"
        wrap.style.backgroundColor = "rgb(110, 202, 255)"
    } else if(today > 18 && today < 20){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(255,212,123,1) 19%, rgba(183,121,247,1) 52%, rgba(76,144,255,1) 100%);"
        wrap.style.backgroundColor = "rgb(175, 170, 250)"
    } else if(today > 20 && today < 24){
        document.body.style.backgroundImage = "linear-gradient(0deg, rgba(1,4,27,1) 12%, rgba(0,20,113,1) 100%);"
        wrap.style.backgroundColor = "rgb(0, 50, 130)"
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
        city.textContent = result.location
        cloudTitle.textContent = "Cloud Coverage:"
        cloud.textContent = result.data.summary
        tempTitle.textContent = "Temperature:"
        temp.textContent = `${((result.data.temperature - 32)*5/9).toFixed(2)}°C`
        windTitle.textContent = "Wind Speed:"
        wind.textContent = `${result.data.windSpeed}mph`
        console.log(result)
    }
})