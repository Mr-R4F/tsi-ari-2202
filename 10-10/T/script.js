import LatLon from 'https://cdn.jsdelivr.net/npm/geodesy@2.4.0/latlon-spherical.min.js';

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(function(position) {
        const CURRENT_LOCATION = document.getElementById('currentLocation');
        const CURRENT_DISTANCE = document.getElementById('distance');

        //Posições
        const LATITUDE = position.coords.latitude;
        const LONGITUDE = position.coords.longitude;

        const POSITION1 = new LatLon(LATITUDE, LONGITUDE);
        const POSITION2 = new LatLon(-23.6757701, -46.7556246);
        const POINTS_DISTANCE = POSITION1.distanceTo(POSITION2);

        const XHTTP = new XMLHttpRequest();
        XHTTP.open('GET', `http://dev.virtualearth.net/REST/v1/Locations/${LATITUDE},${LONGITUDE}?key=AnsdrXCKWxMLKUhKYwT0gSS7DvrGCYZAE6Dp_zkOtuYOw2LDpIYD8Ge4Obd1rHIA`);
        XHTTP.onreadystatechange = () => {
            if (XHTTP.status == 200 && XHTTP.readyState == 4) {
                const RESP = JSON.parse(XHTTP.responseText);
                CURRENT_LOCATION.textContent = RESP.resourceSets[0].resources[0].name;
                CURRENT_DISTANCE.textContent = POINTS_DISTANCE.toFixed(1);
                GetMap(LATITUDE, LONGITUDE);
            }
        }
        XHTTP.send();
                
        function GetMap(lat, lon) { //Para gerar o mapa
            const POSITION = new Microsoft.Maps.Location(lat, lon);
            const INFO_OPTIONS = { 
                title: "Informações de Localização", 
                description:  "Essa é a sua localização atual" 
            };
            const INFO = new Microsoft.Maps.Infobox(POSITION, INFO_OPTIONS);
            const MAP_OPTIONS = {
                id: 'AnsdrXCKWxMLKUhKYwT0gSS7DvrGCYZAE6Dp_zkOtuYOw2LDpIYD8Ge4Obd1rHIA',
                center: POSITION,
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 10
            };
            const MAP = new Microsoft.Maps.Map(document.getElementById('map'), MAP_OPTIONS);
            INFO.setMap(MAP);
        }
    }, function(error) {
        alert('Acesso Bloqueado', error);
    })
} else {
    alert('O navegador não é compatível com a Geolocalização');
}