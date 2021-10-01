let lat,lng;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos => {
        lat =pos.coords.latitude;
        lng=pos.coords.longitude;
    })
}

var info = '{ "lat" :'+ lat +',"lng" '+ lng +'}'
var cords = JSON.stringify(info)

export default cords;
