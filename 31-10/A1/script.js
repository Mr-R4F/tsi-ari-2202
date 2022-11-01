const CANVAS = document.getElementById('canvas');
let ctx = CANVAS.getContext('2d');
let img = document.createElement('img');

///ctx.fillRect(50, 50, 100, 100); //x e y, largua e altura
//ctx.arc(200, 100, 50 ,0 , Math.PI * 2, false);
//a origem é sempre no canto esquerdo superuior para gráficos (para canvas)
//contexto de tela única


/*
-antes do desenho definir o estilo da linha, assim mandar desenhar
-tecnina de trinagularização , é melhor pois usa menos aresta é a base da computação gráfica
-é dinâmico
-serve para criar gráficos dinamicos (p/ representação de dados)
-cubicbezier -> cria uma curva a partir de 4 pontos -> recebe 4 parametro (passa 2 pontos e faz um projeção de 2 pontos)
-linhas de origem  e fim (faz a curvatura de linha)
- também é possivel passar imagens
- drawImage() -necessário criar e atribuir 

*/

img.src = 'gato.jpg';
img.onload = function() { //espera a imagem terminar de carregar
    ctx.drawImage(img, 50, 150, 100, 100) // recebe img, posição que quer colocar, altura e largura
        
    ctx.beginPath(100, 100); //iniciando um desenho + complexo (cria rotas de desenho)
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill(); 

    ctx.font = 'Arial';
    ctx.fillStyle = 'blue';
    ctx.fillText('teste teste', 50, 50);
    //gradiente cor que vai transiciona de uma cor para outra / sombras  /transformações
}

//é possivel desenhar encima da imagem