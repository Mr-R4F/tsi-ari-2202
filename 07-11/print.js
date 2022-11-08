//Imprime algo toda vez que chama

//criar componente / module

module.exports = { //recebe algo (QUALQUER COISA, e retorna tudo daaqui quando der o require/ modulo útil para algo)
    imprimir: function(valor) { //a cd require ob´tem este objeto
        console.log(valor);
    }
} //
//recebe o que quer q o node faça ( e retorna)