/* hash
let i = 0;

function clicar() {
    i++;
    location.hash = i; //guarda na hash a qtd e empilha (coloca um novo endereço) no histórico de navegação
    //document.getElementById('mensagem').innerHTML = i + 'click(s)';
    
    window.onhashchange = () => { //toda vezes que o hash mudar ele entra aqui
        document.getElementById('mensagem').innerHTML = location.hash + 'click(s)'; 
    }
}
*/

//history
let i = 0;

function clicar() {
    i++;
    document.getElementById('mensagem').innerHTML = i + 'cliques'; //obtém o estado atual
    window.history.pushState({n: i}, '', null); //guarda o objeto que possuoi o n de vezes que clicou
}

function avancar() {
    window.history.go(1);

}
//go , forward e back são asdsincronas (deve obter uma resposta primeiro)
window.onpopstate = (e) => { //toda vez que o histórico foi modificada CAI AQUI
    document.getElementById('mensagem').innerHTML = e.state.n + 'click(s)';  //assim garante QUE O HISTORY FOI MODIFICADO
}
function voltar() {
    window.history.go(-1);
    document.getElementById('mensagem').innerHTML = window.history.state.n + 'cliques'; //obtém o estado atual
}