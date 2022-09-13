/*
formas de armazenar dados no navegador
info pré carregadas (navegação) infos do usuário
economiza no bd (req e resposta)
web storage - armazanas dados de forma offline

local é noSQL é chave e val (é constante) (não é baseado e col e tabelas)
getItem
length - chaves
dado uma chave espera receber um valor
volta nulo se n tiver val
session (temporário apenas) os dados só são usados durante aquela sessão.

aplicações offline - dependecia de conectividade online
formas de tratar os dados quando não está online
usa cache
armazena a info (mem n fisica)
 usar em cache - 
 service workers
 proxy recebe a trata as req
 online pega do serve offline pega do cache
deixa mais leve
arq próprio (especificar no html)
promises -> encapsulador -garantir que a função é assincrona e retorna maneira (terminou de acontecer com erro ou não)
navigator info sobre o navegador
estados confomre o modo
dizer os recursos a serem cacheados 
qlqr arquivo que vá fazer requisição para web
//espera cachear. enquanto não termnar não avança
caches.open
fecth captura as requisição a para onde está indo
*/