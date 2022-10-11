if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(function(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        
        console.log(latitude, longitude)

    }, function(error) {
        alert('error', error);
    })
} else {
    alert('O navegador não é compatível com a Geolocalização');
}