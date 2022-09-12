/*
document.getElementById('btn').addEventListener('click', () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = () => {
        const resp = JSON.parse(xhttp.responseText);
        console.log(resp)
        document.querySelector('p').textContent = resp.name;
        document.querySelector('img').src = resp.sprites.front_default;
        localStorage.setItem('nome', 'PITEL')
        console.log(document.querySelector('p'))
    
    }

    xhttp.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu', true);
    xhttp.send();
});
*/