const XHTTP = new XMLHttpRequest();

const RESULT = document.getElementById('result');
const ID = document.getElementById('pokemon-id');
const NAME = document.getElementById('pokemon-name');
const IMG = document.querySelector('img');

window.onload = () => {
    XHTTP.onreadystatechange = () => {
        if (XHTTP.readyState == 4 && XHTTP.status == 200) {
            let resp = JSON.parse(XHTTP.responseText);
            resp = resp.results;

            for (let i = 1; i <= resp.length; i++) {
                showPokemons(i);
            }
            //console.log(resp.sprites.front_default)
            //IMG.src = resp.sprites.front_default
        }
    }
    
    function showPokemons(id) {
        XHTTP.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`, false);
        XHTTP.send();

        if(XHTTP.readyState == 4 && XHTTP.status == 200) {
            let resp = JSON.parse(XHTTP.responseText);
            
            let idResult = document.createElement('span');
            let nameResult = document.createElement('span');
            idResult.id = 'id-results';
            nameResult.id = 'name-results';

            nameResult.onclick = () => {
                if (resp.id == id) {
                    IMG.src = resp.sprites.front_default;
                }
            }
    
            resp.id <= 9 ? idResult.appendChild(document.createTextNode('#00' + resp.id)) : (resp.id <= 99 ? idResult.appendChild(document.createTextNode('#0' + resp.id)) : idResult.appendChild(document.createTextNode('#' + resp.id)));
                
            nameResult.appendChild(document.createTextNode(resp.name));
            ID.appendChild(idResult);
            NAME.appendChild(nameResult);
        }
    }

    for (let id = 1; id <= 151; id++) {
        XHTTP.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=151`, true);
        XHTTP.send();
    }
}