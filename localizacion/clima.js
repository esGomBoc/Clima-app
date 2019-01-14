const axios = require('axios');


const getClima = async(lat, lng)=>{
  let apiKey = '909b93ac9bae907267599b311009460b';
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;

  let resp = await axios.get(url);
  return resp.data.main.temp;
}
module.exports={
  getClima
}


/*
let getWeather = async(lat,lng)=>{
  let weather = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);

  return weather.data.main.temp;
}
*/
