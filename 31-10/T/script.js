const CANVAS = document.getElementById('canvas');
const GET_IMG = document.getElementById('getImg');

const BTN_DOWNLOAD = document.getElementById('downloadImage');
const BTN_PRINT = document.getElementById('printImage');
const BTN_START = document.getElementById('startWebCam');
const INPUT = document.getElementById('file');
const VIDEO = document.getElementById('webcam');
const WEBCAM = new Webcam(VIDEO, 'user', GET_IMG);

let ctx = CANVAS.getContext('2d');
let rect = CANVAS.getBoundingClientRect();

let img = document.createElement('img');
let mouse = false;

img.src = 'no.png';

img.onload = function() {
    ctx.drawImage(img, 20, 20, 350, 350);
    ['mouseup', 'mouseout'].forEach(e => 
        CANVAS.addEventListener(e, function() {
            ctx.closePath();
            mouse = false;
        })
    );

    CANVAS.onmousedown = function(e) {
        ctx.beginPath();
        ctx.moveTo(e.clientX - (CANVAS.offsetLeft + scrollX), e.clientY - (CANVAS.offsetTop + scrollY));
        mouse = true;
    }

    CANVAS.onmousemove = function(e) {
        if (!mouse) return;

        ctx.lineTo(e.clientX - (CANVAS.offsetLeft + scrollX), e.clientY - (CANVAS.offsetTop + scrollY));
        ctx.fillStyle = 'green';
        ctx.strokeStyle = '#000';
        ctx.stroke();
    }
}

//Insere imagem
INPUT.onchange = function(e) {
    const INPUT = e.target;
    const READER = new FileReader();

    READER.onload = function() {
        const DATA_URL = READER.result;
        img.src = DATA_URL;
    }
    READER.readAsDataURL(INPUT.files[0]);
}

//Donwload da imagem
BTN_DOWNLOAD.onclick = function() {
    const LINK = document.createElement('a');
    LINK.href = CANVAS.toDataURL();
    LINK.download = 'imagem';
    document.body.appendChild(LINK);
    LINK.click();
    document.body.removeChild(LINK);
}

//Web cam
BTN_START.onclick = function() {
    WEBCAM.start()
    .then(result => {
        console.log('Webcam iniciada');
    })
    .catch(err => {
        console.log(err);
    });
}

BTN_PRINT.onclick = function() {
    const PICTURE = WEBCAM.snap();
    img.src = PICTURE;
    ctx.drawImage(img, 100, 100);
}