// Initialisation de la carte Leaflet
var map = L.map('map').setView([45.166672, 5.71667], 13); // Grenoble, avec un zoom de 13

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);


// Initialisation du marqueur
var mapmarqueur = L.map('mapmarqueur').setView([45.166672, 5.71667], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mapmarqueur);

L.marker([45.166672, 5.71667]).addTo(mapmarqueur);


// Initialisation de l'icon du marqueur
var mapicon = L.map('mapicon').setView([45.166672, 5.71667], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mapicon);


const myIcon = L.icon({
    iconUrl: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",

});

L.marker([50.505, 30.57], {icon: myIcon}).addTo(mapicon);
