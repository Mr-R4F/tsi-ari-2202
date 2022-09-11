const img = document.querySelector('img'); //btn

const audio = document.querySelector('audio');
const btn = document.getElementById('play');

const meter = document.getElementById('meter');
const square = document.querySelector('.control-square');

const volContent = document.getElementById('vol-content');
const volArea = document.getElementById('vol-area');
const vol = document.getElementById('vol-bar');

const volImage = document.getElementById('volImage');

let i = 0;

img.onclick = () => {
    if (btn.id == 'play' || btn.id == 'replay') {
        if (i == 0) {
            audio.src = 'assets/music2.mp3'; 
            //https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3 -> audio online
            img.src = 'assets/loading.gif';
            img.width = '34'; 
        } else {
            audio.play(); 

            img.src = 'assets/pause.png';
            btn.id = 'pause';
        }
    } else {
        audio.pause();

        img.src = 'assets/play.png';
        img.width = '34'; 
        btn.id = 'play';
    }

    if (i == 0) {
        audio.onloadedmetadata = () => {
            img.src = 'assets/pause.png';
            img.width = '34'; 
            i = 1;
        
            audio.oncanplay = () => { //Ao tiver pronto p/ tocar
                //duração total
                const min = (audio.duration / 60).toString(); //Efetua a operação e converte p/ string.
                const sec = parseFloat('0' + min.substring(1, 4)) * 60; //pega o val depois do ponto
                const totalDurationMin = min.substring(0, 1); //Pega val antes do ponto
                const totalDurationSec = parseInt(sec); //Arredonda
                
                if (totalDurationMin <= 9 && totalDurationSec <= 9 || totalDurationMin > 9 && totalDurationSec <= 9) {
                    document.getElementById('total-min').textContent = totalDurationMin;
                    document.getElementById('total-sec').textContent = '0' + totalDurationSec;
                } else {
                    document.getElementById('total-min').textContent = totalDurationMin;
                    document.getElementById('total-sec').textContent = totalDurationSec;
                }
            }
            audio.ontimeupdate = () => currentDuration();    
            audio.play(); 
        } 
    }
}

vol.oninput = () => setVolume();

volArea.onmouseover = () => {
    volContent.style.display = 'flex';
}
volArea.onmouseleave = () => {
    volContent.style.display = 'none';
}

function currentDuration() {
    const currentMin = (audio.currentTime / 60).toString();
    const currentSec = parseFloat(currentMin.substring(1, 4)) * 60; //divindo o decimal.
    console.log(currentMin, currentSec)

    if (audio.duration == audio.currentTime) {
        btn.id = 'replay';
        img.src = 'assets/play.png';
    }

    if (currentMin <= 9 && currentSec <= 9) {
        document.getElementById('current-min').textContent =  parseInt(currentMin).toFixed(0);
        document.getElementById('current-sec').textContent = '0' + currentSec.toFixed(0);
    } else {
        document.getElementById('current-min').textContent = parseInt(currentMin).toFixed(0);
        document.getElementById('current-sec').textContent = currentSec.toFixed(0);
    }

    meter.value = ((audio.currentTime / audio.duration) * 100).toFixed(0); //mostra o reprodução atual do video (meter)
}
vol.oninput = () => {
    audio.volume = vol.value / 100;

    if (vol.value == 0)
        volImage.src = 'assets/VolOff.png';
    else
        volImage.src = 'assets/VolOn.png';
};