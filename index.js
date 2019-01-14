let argv = require("./config/yargs").argv;
let location = require('./localizacion/localizacion');
let weather = require('./localizacion/clima');

let getWeather = async(direccion)=>{
  try {
    let loc = await location.getLocation(direccion);
    let  clim = weather.getClima(loc.lat,loc.lng);
    return clim;

  } catch (e) {
    return `La direccion ingresada ${direccion} no se pudo encontrar`;
  } finally {

  }
}
getWeather(argv.direccion)
  .then(data=>console.log(data))
  .catch(e=>console.log(e));
