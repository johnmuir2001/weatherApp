const axios = require('axios')

const mapBoxKey = "pk.eyJ1Ijoiam9obm11aXIiLCJhIjoiY2s3YnVsbHpjMDA2bzNsbnMydmZpZDkydiJ9.eWgBavwZFFaD98Ng-mMmYg" //map box key in here

const getLocation = async (location) => {
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapBoxKey}`
    try {
        const response = await axios.get(URL);
        return {
            lat: response.data.features[0].center[1],
            lng: response.data.features[0].center[0],
            location: response.data.features[0].place_name
        }
    } catch (error) {
        console.log("ooops")
    }
}

module.exports = {
    getLocation
}