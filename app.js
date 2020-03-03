const { getWeather } = require('./weather')
const { getLocation } = require('./location')
var figlet = require('figlet');

const main = async (input) => {
    const locationObj = await getLocation(input)
    await getWeather(locationObj)

}

console.log(figlet.textSync('Weather App', {
    font: 'isometric2',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));

main(process.argv[2])