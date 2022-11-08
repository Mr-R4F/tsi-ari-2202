//responsável por criar aplicação
const {app, BrowserWindow} = require('electron'); //objeto (retorna duas variáveis) importando duas variáveis da biblioteca eletron (como se fosse objeto)
//passar dimensão da janela e diz qual arquivo que vai carregar

app.on('ready', function() { //CRIAR UMA JANELA a cada chamada, com determinado tamanho e a carrega
    const WINDOW = new BrowserWindow({
        width: 800,
        height: 600
    }) //criar nova browser window e passa largura e altura da janela que vai criar

    WINDOW.loadFile('index.html'); //carrega
});

//lifecycle functions -> função que são chamadas durante a execução da aplicação (aberta, fechada, um evento); (callbacks) (são chamadas em determinadas circunstancias)
//nesse caso assim que a aplicação for aberta
//promise (forma do js falar que algo é assicrono)

/*
app.whenReady.then(function() { //quando a aplicação estiver pronta (carregou tudo do eletron)
    CREATE_WINDOW();
}) //quando a aplicação estiver pronta
//..pois o eletron só  abre a aplicação quando ele termina de carregar na aplicação

//tiver ok criar janela
//improta eletron escuta ua função de ready e quando ti ver pronto criar janela padrão e criar aquv html
//aplicação (electron) crtl + r (n recarrega)
permite criar atalhos para as aplicações
/*CRIAR EM ARQUIVO SEPArADO
necessário electron build -> npm electron builder (criar aplicações para todas as plataformas) -> para gerar o executável
+ arquivos de config
run e depois run dist -> só funcionar  se for dep de dev  (só roda no contexo de desenvolvedor)
garantir tudo integro]
excluir node
trocar o package -> electron-builder e electron dentro das dependecies
para mobile -> cordova (cria aplicação que por fim é uma web view que carrega aplicação HTML) 9gera aplicação tanto para ios e android
*/