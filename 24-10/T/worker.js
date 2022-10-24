let me = 'inicio';
let worker = new Worker('worker.js');

for (let i = 0; i < 5; i++) {
  mes = mes + '<br>' + i;
}

mes = mes + '<br>' + 'fim';

postMessage(me);