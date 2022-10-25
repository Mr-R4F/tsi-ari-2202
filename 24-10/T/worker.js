let me = 'inicio';
let worker = new Worker('worker.js');

for (let i = 0; i < 5; i++) {
    document.getElementById('mensag') = mes + '<br>' + i;
}

document.getElementById('mensag') = mes + '<br>' + 'fim';
postMessage(me);