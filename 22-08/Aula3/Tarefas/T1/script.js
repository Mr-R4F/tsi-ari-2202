//Video
const btn = document.getElementById('play');
const video = document.querySelector('video');
const videoItems = document.querySelector('.video-items');
const videoContent = document.querySelector('.video-content');

//Volume
const vol = document.getElementById('vol-bar');
const volArea = document.getElementById('vol-area');
const volContent = document.getElementById('vol-content');
const volBtn = document.getElementById('vol');

//Progress Bar
const meter = document.getElementById('meter');
const square = document.querySelector('.control-square');

//Fullscreen & Slow Motion
const btnFullscreen =  document.querySelector('.fullscreen');

const motionBtn = document.getElementById('motion');
const motionOptions = document.getElementById('motion-options');

const configOptions = document.querySelector('.config-items');
const configBtn = document.getElementById('config');

const velBtn = document.getElementById('vel');
const vel = document.getElementsByClassName('motion-vel');

btn.onclick = () => {
    if (btn.id == 'play' || btn.id == 'replay') {
        video.play();
        btn.id = 'pause';

       createSVG('0 0 320 512', 'M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z', btn, 1);
    } else {
        video.pause();
        btn.id = 'play';
    
       createSVG('0 0 384 512', 'M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z', btn, 1);
    }
};

video.oncanplay = () => { //Ao tiver pronto p/ tocar
    //duração total
    const min = (video.duration / 60).toString(); //Efetua a operação e converte p/ string.
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
video.ontimeupdate = () => currentDuration();

vol.oninput = () => setVolume();

//Faz aparecer a barra de volume
volArea.onmouseover = () => {
    volContent.style.display = 'flex';
}
volArea.onmouseleave = () => {
    volContent.style.display = 'none';
}

btnFullscreen.onclick = () => fullscreenMode();

//Abre menu de opções
configBtn.onclick = () => {
    if (configBtn.id == 'config') {
        configOptions.style.display = 'flex';
        configBtn.id = 'config-open';
    } else {
        configOptions.style.display = 'none';
        configBtn.id = 'config';
    }
}

//No menu de opções -> velocidade -> escolha a velocidade do video.
motionBtn.onclick = () => {
    if (motionOptions.id == 'motion-options') {
        motionOptions.style.display = 'flex';
        configOptions.style.display = 'none';
        motionOptions.id = 'motion-on';
    } else {
        motionOptions.style.display = 'none';
        configOptions.style.display = 'flex';
        motionOptions.id = 'motion-options';
    }
}

velBtn.onclick = () => {
    if (motionOptions.id == 'motion-options') {
        motionOptions.style.display = 'none';
        configOptions.style.display = 'flex';
        motionOptions.id = 'motion-on';
    } else {
        motionOptions.style.display = 'none';
        configOptions.style.display = 'flex';
        motionOptions.id = 'motion-options';
    }
}

/*
Cada vez que a reprodução do video avança, esta função abaixo é executada. 
A currentTime retorna a posição atual de reprodução.
*/
function currentDuration() {
    const currentMin = (video.currentTime / 60).toString();
    const currentSec = parseFloat(currentMin.substring(1, 4)) * 60; //divindo o decimal.
    
    if (video.duration == video.currentTime) {
        btn.id = 'replay';
        createSVG('0 0 512 512', 'M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z', btn, 1);
    }

    if (currentMin <= 9 && currentSec <= 9) {
        document.getElementById('current-min').textContent =  parseInt(currentMin).toFixed(0);
        document.getElementById('current-sec').textContent = '0' + currentSec.toFixed(0);
    } else {
        document.getElementById('current-min').textContent = parseInt(currentMin).toFixed(0);
        document.getElementById('current-sec').textContent = currentSec.toFixed(0);
    }

    meter.value = ((video.currentTime / video.duration) * 100).toFixed(0); //mostra o reprodução atual do video (meter)
    
    //p/ o square não sair da área de controle.
    if (meter.value <= 99)
        square.style.left = meter.value + '%';
    else
        square.style.left = '99%';
}

function createSVG(viewBoxValue, pathValue, btnType, svgIndex) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', viewBoxValue);
    svg.setAttribute('width', '26');
    svg.setAttribute('height', '26');
    svg.setAttribute('fill', 'white');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathValue);
        
    svg.appendChild(path);
    btnType.appendChild(svg);

    document.querySelectorAll('svg')[svgIndex].remove(); //remove botões a depender.
    return btnType;
}

function setVolume() {
    video.volume = vol.value / 100;

    switch (vol.value != -1) {
        case vol.value > 66 && vol.value <= 100:
            volBtn.id = 'vol-high';
            createSVG('0 0 640 512', 'M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z', volBtn, 2);
            break;

        case vol.value > 33 && vol.value <= 66:
            volBtn.id = 'vol-med';
            createSVG('0 0 584 512', 'M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z', volBtn, 2);   
            break;

        case vol.value > 0  && vol.value <= 33:
            volBtn.id = 'vol-low';
            createSVG('0 0 448 512', 'M412.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406c-8.406 10.25-6.906 25.37 3.375 33.78C393.5 228.4 400 241.8 400 256c0 14.19-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406C435.1 311.6 448 284.7 448 256S435.1 200.4 412.6 181.9zM301.2 34.84c-11.5-5.187-25.01-3.116-34.43 5.259L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9C272.7 477.2 280.3 480 288 480c4.438 0 8.959-.9313 13.16-2.837C312.7 472 320 460.6 320 448V64C320 51.41 312.7 39.1 301.2 34.84z', volBtn, 2);
            break;
    
        case vol.value == 0:
            volBtn.id = 'vol-off';
            createSVG('0 0 576 512', 'M301.2 34.85c-11.5-5.188-25.02-3.122-34.44 5.253L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.984 5.312 13.58 8.094 21.26 8.094c4.438 0 8.972-.9375 13.17-2.844c11.5-5.156 18.82-16.56 18.82-29.16V64C319.1 51.41 312.7 40 301.2 34.85zM513.9 255.1l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L480 222.1L432.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L480 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94L513.9 255.1z', volBtn, 2);
            break;
            
        default:
            break;
    }
}

function fullscreenMode() {
    if (btnFullscreen.id == 'fullscreen-off') {
        if (videoContent.requestFullscreen) {
            videoContent.requestFullscreen();
            videoItems.style.bottom = '9.5%';
            btnFullscreen.id = 'fullscreen-on';
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            videoItems.style.bottom = '14.5%';
            btnFullscreen.id = 'fullscreen-off';
        }
    }
}

//PlayBack
for (let i = 1; i < vel.length; i++) {
    let playBackValue = 0;

    vel.item([i]).onclick = () => {
        switch (vel.item([i]).textContent != 0) {
            case vel.item([i]).textContent == 0.25:
                playBackValue = 0.25;
                console.log('1')
                break;

            case vel.item([i]).textContent == 0.50:
                playBackValue = 0.50;
                break;

            case vel.item([i]).textContent == 0.75:
                playBackValue = 0.75;
                break;
    
            case vel.item([i]).textContent == 1.0:
                playBackValue = 1.0;
                break;

            case vel.item([i]).textContent == 1.25:
                playBackValue = 1.25;
                break;
        
            case vel.item([i]).textContent == 1.50:
                playBackValue = 1.50;
                break;

            case vel.item([i]).textContent == 1.75:
                playBackValue = 1.75;
                break;
        
            case vel.item([i]).textContent == 2:
                playBackValue = 2;
                break;
             
            default:
                break;
        }
        video.playbackRate = playBackValue;
    }
}