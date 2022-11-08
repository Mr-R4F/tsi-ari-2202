/* NODE
const FS = require('fs'); //biblioteca que permite manipular arquivos no PC (possui retorno)
const PRINT = require('./print.js'); //PASSAR O CAMINHO (sempre procura para ver se é um MODULO LOCAL)

FS.writeFile('C:\Users\rafael.msoares5/Documents/test.txt', 'Olá mundo', () => { //permite manipular arquivos no diretório, com isso manda escrevr o arquivo com tal url,  conteudo e nome, e manda executar a função
   // console.log('Terminou de escrever');
   PRINT.imprimir('Imprimiu corretamente'); //ao chamas isto deve colocar no terminal (incluir pacote e do modulo)
}); //escreve arquivo (nome-do-arquivo, conteudo) //executa isso e cai em uma callback
//É possível criar modulos ( é modular), serve para reuso ou organização de código, por exmp funções (cria funções e importa)
//E como se tornar uma aplicação
//api retornar dados, gerenciar dados de outras aplicações
//recebe requisições e retorna respostas


//Possui biblioteca básica HTTP (permite fazer requisições (controla o pacote HTTP), por um porta) e permite criar servidor no node para escutar requisiçoes nas portaas
//API
const HTTP = require('http');

HTTP.createServer(function (req, res) { //A cada requisição cai aqui
    switch (req.url) {
        case '/Teste':
            req.url(); //escuta a requisição para a rota
            res.writeHead(200, {'Content-Type': 'text/html'}); //plain, html, application/json
            res.write('{"error": "not found"}'); //necessário constriur resposta. (cai aqui independentemente)
            res.end() // envia a resposta.
            break;
    
        default:
            req.url(); //escuta a requisição para a rota
            res.writeHead(200, {'Content-Type': 'text/html'}); //plain, html, application/json
            res.write('{"error": "not found"}'); //necessário constriur resposta. (cai aqui independentemente)
            res.end() // envia a resposta.
            break;
    }
}).listen(8080); //(recebe função, que recebe uma requisição (recebe) e resposta (manda para o serve)) (fornecido pelo pacote) e passar a porta no listen\
//ao iniciar fica rodando
//servidor que permite criar coisas
//para arquivo html usar o arquivo FS (ler o arquivo, pega o conteudo e coloca aqui)
//para criar rotas, escutar a requisição
//para checar a URL (rota)
//permite que crie aplicações desktop
//possui gerenciador de pactoes ( compionentes desenvolvidos, e vai modularizando a aplicação) -> npm (instala, atualiza e remove pacotes necessários para a aplicações) (instala pacotes externos para auxilio de desenvolvimento)
    - npm init (só funciona na pasta) -> inicialializa o npm na pasta
    criar o arquivo package.json -> arquivo de config do NPM, com isso é possível saber as configurações e dependencias do projeto e conforme vai instalando vai colocando nele
assim rodando npm install instala essas dependencias

para servidores pode-se usar o express .js > npm install express (permite criar aplicações p/ web (por exmp API))
é um pacote
//criar dependecies (que diz as dependencias que o projeto usa)
no node modules -> pacotes externo
assim toda vez que for usar ve se tem algo no dependecies e instala uma por uma
criar aplicação usando express. (cria-se aplicações a partir disso)
*/

//CRIA EXPRESS
/*
const EXPRESS = require('express'); //importa
const APP = EXPRESS(); //criar aplicação de forma express / permite gerenciar as req passando rotas (post ou get)
//cria rota
APP.get('/teste', function(req, res) { //req vem preenchida com a req e manda resp de volta
    res.send('Olá, mundo!') //manda a resp de volta/ inicializa
}); //escuta determinada rota com get.

APP.listen(8080, function() { //escuta aqui e se der certo
    console.log('Servidor rodando');
})// porta e callback (se for inicializado corretamente)
/*controe aplicações complexas

//ELECTRON
/*aplicações hibridas a aprtir de um código fonte exporta para diferentes plataformas
electron por exemplo criar aplicações nativas de pc utilizando JS )roda nativa
constroi aplicações

instalar o eletron na máq.
em scripts no pack json pode-se criar scripts-> comandos customizados para rodar na máquina 
start - auxilia que é tal comando que vai fazer a aplicações rodar
para rodar o start npm run start / npm start para rodar uma aplicação node
para electron usar electron. (inicializar uma aplicação a partir da raiz) (criar aplicações multiplataforma)
criar HTML, e a partir da sintaxe criar uma janela no eletron para abrir uma janela como se fosse no navegador
require no eletron
*/
