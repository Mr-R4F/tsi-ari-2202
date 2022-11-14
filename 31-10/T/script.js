const CANVAS = new Array(
    document.querySelectorAll('canvas')[0],
    document.querySelectorAll('canvas')[1]
);
const BTN_LINK = document.getElementById('download');
const INPUT = document.getElementById('file');
const VIDEO = document.getElementById('webcam');
const WEBCAM = new Webcam(VIDEO, 'user', CANVAS[1]);

const BTN = document.getElementById('btn');
const REMOVE = document.getElementById('download-picture');

let ctx = CANVAS[1].getContext('2d');
let img = document.createElement('img');
let mouse = false;

img.src = 'gato.jpg';

img.onload = function() {
    ctx.drawImage(img, 50, 150, 200, 200);

    ['mouseup', 'mouseout'].forEach(e => 
        CANVAS[1].addEventListener(e, function() {
            ctx.closePath();
            mouse = false;
        })
    );

    CANVAS[1].onmousedown = function(e) {
        ctx.beginPath();
        ctx.moveTo(e.clientX - (CANVAS[1].offsetLeft + scrollX), e.clientY - (CANVAS[1].offsetTop + scrollY));
        mouse = true;
    }

    CANVAS[1].onmousemove = function(e) {
        if (!mouse) return;

        ctx.lineTo(e.clientX - (CANVAS[1].offsetLeft + scrollX), e.clientY - (CANVAS[1].offsetTop + scrollY));
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
BTN_LINK.onclick = function() {
    const LINK = document.createElement('a');
    LINK.href = CANVAS[1].toDataURL();
    LINK.download = 'imagem';
    document.body.appendChild(LINK);
    LINK.click();
    document.body.removeChild(LINK);
}

//Web cam
BTN.onclick = function() {
    WEBCAM.start()
    .then(result => {
        console.log('Webcam iniciada');
    })
    .catch(err => {
        console.log(err);
    });
}

REMOVE.onclick = function() {
    const PICTURE = WEBCAM.snap();
    img.src = PICTURE;
}