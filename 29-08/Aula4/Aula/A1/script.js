//const arrastavel = document.getElementById('arrastavel');
const arrastaveis = document.querySelectorAll('.arrastavel'); //pegando todos os elementos
const areaDeArraste = document.getElementById('area-de-arraste');
let arrastavelAtual;

/*
arrastavel.ondragstart = () => {
    console.log('começou a ser arrastado');
}
*/

//Dispara toda vez que passar o elemento passar por cima
areaDeArraste.ondragover = (e) => {
    e.preventDefault(); //paramêtro de evento (todo 1º);
    console.log('Arrastando por cima');
    areaDeArraste.style.backgroundColor = 'red';
}

//Quando sai do elemento
areaDeArraste.ondragleave = () => {
    console.log('Mudou');
    areaDeArraste.style.backgroundColor = 'green';
}

//Solta o elemento e fica
areaDeArraste.ondrop = () => {
    console.log('Elemento sendo solto');
    areaDeArraste.style.backgroundColor = 'green';
   // areaDeArraste.appendChild(arrastavelAtual); //define quem é o pai
   areaDeArraste.appendChild(arrastavelAtual); //Copia o elemento e a cópia fica (como filho)
}

//qlqr elemento que for arrastado, colocar e colocar com filho
arrastaveis.forEach(el => {  //interou
    el.ondragstart = () => {
       arrastavelAtual = el; //apenas o elemento pego
    }
});

/*
arrow -> this é local (muda o esopo a depender da função)
*/

//content editable -> elementos visuais podem ser editados (ao clicar em cima dá para editar)

