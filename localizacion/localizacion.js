const axios = require('axios');

let getLocation = async (direccion)=>{

  let adreess = encodeURI(direccion);
  let location = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${adreess}&key=AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM`);
  let loc = location.data.results[0];
  let {lat, lng} = loc.geometry.location;
  return {
      direccion : loc.formatted_address,
      lat,
      lng
  };
}
module.exports={
  getLocation
}
