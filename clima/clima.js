const axios = require('axios');
const appId = '1bb25dde79f82c16e1b53bfc64728fa4'
const unidad = 'metric'

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${unidad}&appid=${appId}`)

    if (resp.data.cod === 400) {
        throw new Error(`No hay resultados para la latitud: ${lat} y longitud: ${lng}`);
    }

    return resp.data.main.temp

}

module.exports = {
    getClima
}