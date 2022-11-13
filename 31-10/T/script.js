const BTN_LINK = document.querySelector('a');
const INPUT = document.querySelector('input');
const CANVAS = document.querySelector('canvas');

let ctx = CANVAS.getContext('2d');
let img = document.createElement('img');
let mouse = false;

img.src = 'gato.jpg';

img.onload = function() {
    ctx.drawImage(img, 50, 150, 200, 200);

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
BTN_LINK.onclick = async function() {
    const IMAGE = await fetch(img.src);
    const IMAGE_BLOG = await IMAGE.blob();
    const IMAGE_URL = URL.createObjectURL(IMAGE_BLOG);
      
    const LINK = document.createElement('a');
    LINK.href = IMAGE_URL;
    LINK.download = 'imagem';
    document.body.appendChild(LINK);
    LINK.click();
    document.body.removeChild(LINK);
}