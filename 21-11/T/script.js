/* const BTN = document.querySelector('button');

BTN.onclick = function() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            const LAT = pos.coords.latitude;
            const LON = pos.coords.longitude;
            document.getElementById('result').textContent = `${LAT} & ${LON}`;
        }, function(err) {
            alert(err);
        })
    } else {
        console.log('Não suporta');
    } 
} 
*/

const ADD = document.getElementById('add');
const DESFAZER = document.getElementById('desfazer');
const AVANCAR = document.getElementById('avancar');
const CAMPO = document.getElementById('campo');
const UL = document.querySelector('ul');

const LISTA = [];

ADD.onclick = function() {
    LISTA.push(CAMPO.value);
    window.history.pushState({k: LISTA}, '', null);
    mostrar();
}

function mostrar() {
    const LI = document.createElement('li');
    LISTA.forEach(function(val) {

        LI.appendChild(document.createTextNode(val));
        UL.appendChild(LI);
    })
}

DESFAZER.onclick = function() {
    window.history.back();
    mostrar();
}

window.onpopstate = (e) => {
    console.log(e.state.k);
}

AVANCAR.onclick = function() {
    window.history.forward();
    mostrar();
}
