const CANVAS = document.querySelector('canvas');
let ctx = CANVAS.getContext('2d');
let img = document.createElement('img');
img.src = 'gato.jpg';

img.onload = function() {
    ctx.drawImage(img, 50, 150, 300, 300);

    CANVAS.onmousemove = function(e) {
        let coor = `${e.clientX} | ${e.clientY}`;
        document.querySelector('p').textContent = coor;
    console.log(coor);
        ctx.fillStyle = 'green';
        ctx.strokeStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
        ctx.lineTo(e.clientX, e.clientY);
        ctx.closePath();
     
        ctx.stroke();
        ctx.fill(); 
    }
}



