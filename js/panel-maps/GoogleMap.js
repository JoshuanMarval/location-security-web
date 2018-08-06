

function initMap() {


    //Map options
    let options = {
        zoom: 7,
        center: {lat:-0.180653, lng:-78.467834},
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    };


    let map = new google.maps.Map(document.getElementById('googleMap'), options);






    let markers = [
        {
            coords:{lat:-0.180653,lng:-78.467834},
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Quito</h1>'
        },
        {
            coords:{lat:-2.203816,lng:-79.897453},
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Guayaquil</h1>'
        },
        {
            coords:{lat:-3.989038,lng:-79.203560}
        }
    ];

    for (let i = 0; i < markers.length; i++){
        addMarker(markers[i])
    }

    function addMarker(props) {
        let marker = new google.maps.Marker({
            position:props.coords,
            map:map
            //icon: props.iconImage
        });

        if (props.iconImage){
            marker.setIcon(props.iconImage);
        }
    }




}

