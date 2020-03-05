const axios = require('axios')

const apiKey = "" //dark skies key in here

const getWeather = async (locationObj) => {

  const {lat, lng, location} = locationObj
  const URL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
  try {
    const response = await axios.get(URL);
    return {
      location: location,
      data: response.data.currently
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getWeather
}