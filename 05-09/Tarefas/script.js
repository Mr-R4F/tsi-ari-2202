
const RESULT = document.getElementById('result');
const SCREEN = document.querySelector('.screen');
const XHTTP = new XMLHttpRequest();

document.getElementById('start').onclick = () => {
    XHTTP.onreadystatechange = () => {
        if (XHTTP.readyState == 4 && XHTTP.status == 200) {
            let resp = JSON.parse(XHTTP.responseText);
            console.log(resp)
        }
    }

    for (let id = 0; id < 905; id++) {
        showPokemons(id);
        function showPokemons(id) {
            XHTTP.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`, true);
            XHTTP.send();
        }
    }  
}