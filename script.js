navigator.geolocation.getCurrentPosition(function(pos) {
    console.log(pos);
    const {latitude} = pos.coords;
    const {longitude} = pos.coords;

    console.log(latitude, longitude);
},
function() {
    alert(BipBop)
}
);


const map = L.map('map').setView([50.8573188, 4.3562634], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.8573188, 4.3562634]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();