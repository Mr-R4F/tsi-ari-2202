import LatLon from 'https://cdn.jsdelivr.net/npm/geodesy@2.4.0/latlon-spherical.min.js';

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(function(position) {
        const ADRESS = document.getElementById('adress');
        const DISTANCE = document.getElementById('atualPosition');

        //Posições
        const LATITUDE = position.coords.latitude; -23.6756485; // -23.6756485
        const LONGITUDE = position.coords.longitude; //-46.7556487

        const POSITION1 = new LatLon(LATITUDE, LONGITUDE);
        const POSITION2 = new LatLon(-23.6656295, -46.7012228);
        const POINT_DISTANCE = POSITION1.distanceTo(POSITION2);

        const XHTTP = new XMLHttpRequest();
        XHTTP.open('GET', `http://dev.virtualearth.net/REST/v1/Locations/${LATITUDE},${LONGITUDE}?key=AnsdrXCKWxMLKUhKYwT0gSS7DvrGCYZAE6Dp_zkOtuYOw2LDpIYD8Ge4Obd1rHIA`);
        XHTTP.onreadystatechange = () => {
            if (XHTTP.status == 200 && XHTTP.readyState == 4) {
                const resp = JSON.parse(XHTTP.responseText);
                ADRESS.textContent = resp.resourceSets[0].resources[0].name;
                DISTANCE.textContent = POINT_DISTANCE.toFixed(2);
            }
        }
        XHTTP.send();
    }, function(error) {
        alert('Acesso Bloqueado', error);
    })
} else {
    alert('O navegador não é compatível com a Geolocalização');
}