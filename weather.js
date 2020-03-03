const axios = require('axios')

const apiKey = "" //dark skies key in here

const getWeather = async (locationObj) => {

  const {lat, lng, location} = locationObj
  const URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
  try {
    const response = await axios.get(URL);
    console.log(`The Weather in ${location} is ${(response.data.currently.summary).toLowerCase()} and the temperature is ${((response.data.currently.temperature - 32) * 5/9).toFixed(2)}°C`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getWeather
}