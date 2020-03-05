const { getWeather } = require('./weather')
const { getLocation } = require('./location')

const main = async (input) => {
   try {
    const locationObj = await getLocation(input)
    const response = await getWeather(locationObj)
    return response
   } catch (error) {
       return {
           error: "That is not a valid location"
       }
   }

}

module.exports = {
    main
}