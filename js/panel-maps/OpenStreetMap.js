
//Map options
let mymap = L.map('open_street_map', { zoomControl: false }).setView([-1.9986, -79.6134], 15);

new L.Control.Zoom({ position: 'topright' }).addTo(mymap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);


$.getJSON("maps.php", function(data){

});

let markers = [


    {
        coords:{lat:-2.0038,lng:-79.6092}
    },
    {
        coords:{lat:-2.0261,lng:-79.6014}
    },
    {
        coords:{lat:-2.0114,lng:-79.6089}
    }
];



//Adding Markers
for (let i = 0; i < markers.length;i++){
    addmarker(markers[i])
}

function addmarker(props){
     L.marker([props.coords.lat, props.coords.lng]).addTo(mymap)
         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
         .openPopup();
}