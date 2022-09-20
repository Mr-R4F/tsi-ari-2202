const XHTTP = new XMLHttpRequest();

const RESULT = document.getElementById('result');
const ID = document.getElementById('pokemon-id');
const NAME = document.getElementById('pokemon-name');
const IMG = document.querySelector('img');
let valAbilities = [];

/* Pokemon stats */
const HEIGHT =  document.getElementById('height');
const WEIGHT =  document.getElementById('weight');
const SPEED = document.getElementById('speed');
const SpecialDEFENSE = document.getElementById('special-defense');
const SpecialATTACK = document.getElementById('special-attack');
const DEFENSE = document.getElementById('defense');
const ATTACK  = document.getElementById('attack');
const ABILITY = document.getElementById('ability');
const BaseEXP = document.getElementById('exp-base');
const TypeONE = document.getElementById('type-one');
const TypeTWO = document.getElementById('type-two');
const HP = document.getElementById('hp');

XHTTP.onreadystatechange = () => {
    if (XHTTP.readyState == 4 && XHTTP.status == 200) {
        let resp = JSON.parse(XHTTP.responseText);
        resp = resp.results;

        for (let i = 1; i <= resp.length; i++) {
            showPokemons(i);
        }
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
            
        nameResult.style.cursor = 'pointer';
       
        nameResult.onclick = () => {
            if (resp.id == id) {
                IMG.src = resp.sprites.front_default;
                HP.textContent = resp.stats[0].base_stat;
                ATTACK.textContent = resp.stats[1].base_stat;
                DEFENSE.textContent = resp.stats[2].base_stat;
                SpecialDEFENSE.textContent = resp.stats[3].base_stat;
                SpecialATTACK.textContent = resp.stats[4].base_stat;
                SPEED.textContent = resp.stats[5].base_stat;
                BaseEXP.textContent = resp.base_experience;
                WEIGHT.textContent = resp.weight + ' kg';
                HEIGHT.textContent = resp.height + ' cm';

                TypeONE.textContent = resp.types[0].type.name.charAt(0).toUpperCase() + resp.types[0].type.name.slice(1);
                !resp.types[1] ?  TypeTWO.textContent = '' : TypeTWO.textContent = resp.types[1].type.name.charAt(0).toUpperCase() + resp.types[1].type.name.slice(1);

                for (let i = 0; i < resp.abilities.length; i++) {
                    valAbilities[i] = resp.abilities[i].ability.name;
                    ABILITY.textContent = valAbilities.join(' / ');
                }

                document.getElementById('info-id').textContent = resp.id;
                document.getElementById('info-name').textContent = resp.name.charAt(0).toUpperCase() + resp.name.slice(1);
            }
        }

        resp.id <= 9 ? idResult.textContent = '#00' + resp.id : (resp.id <= 99 ? idResult.textContent = '#0' + resp.id : idResult.textContent = '#' + resp.id);
 
        nameResult.appendChild(document.createTextNode(resp.name.charAt(0).toUpperCase() + resp.name.slice(1)));
        ID.appendChild(idResult);
        NAME.appendChild(nameResult);
    }
}

for (let id = 1; id <= 151; id++) {
    XHTTP.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=151`, true);
    XHTTP.send();
}