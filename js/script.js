window.onload = function () {
  var stage = document.getElementById("stage");
  //aqui eu usei o ID lá do canvas com esse stage entre aspas,ou seja eu repassei todos os valores do canvas para essa variavel com o nome stage
  var ctx = stage.getContext("2d");
  //nessa variável ctx a variavel stage vai atribuir um valor com contexto de 2d ou seja bidimensional ao canvas lá em cima, reparem que de novo ele chamou o ID stage
  document.addEventListener("keydown", keyPush);
  //ta adicionando um evento de teclado
  setInterval(game, 80);
  // no intervalo de 80 ele vai usar a funciton game que ta la em baixo

  const vel = 1;
  //coloquei const porque tem que ser um valor constante de 1

  var vx = (vy = 0);
  var px = 10;
  //posição x da cabeça da cobrnha
  var py = 15;
  //posição y da cabeça da cobrinha
  var tp = 30;
  //tamanho da peça,quadrado inteiro laranja lá
  var qp = 20;
  //quantidade de peças
  var ax = (ay = 5);
  //variável para nossa maçã,a primeira posição da nossa maçã

  var trail = [];
  //variável para o tamanho da cobrinha,tem as chave vazia pq vai receber valores
  tail = 5;

  function game() {
    //esse function tem a mesma função que o def no python
    px += vx;
    py += vy;
    //aqui a posição da cabeça da cobrinha px e py que o que se movimenta primeiro vai receber o valor da velocidade x e y pra se movimentar
    
    if (px < 0) {
      px = px == 10;
      tail = 5;
      document.getElementById("over").style.display = "block"
      document.getElementById("score-div").innerHTML = "SCORE: " + tail;
    }

    if (px > qp - 1) {
      px = qp - 1;
      tail = 5;
      document.getElementById("over").style.display = "block"
      document.getElementById("score-div").innerHTML = "SCORE: " + tail;
    }

    if (py < 0) {
      py = py == 15;
      tail = 5;
      document.getElementById("over").style.display = "block"
      document.getElementById("score-div").innerHTML = "SCORE: " + tail;
    }
    if (py > qp - 1) {
      py = qp - 1;
      tail = 5;
      document.getElementById("over").style.display = "block"
      document.getElementById("score-div").innerHTML = "SCORE: " + tail;
    }
    
    ctx.fillStyle = "greenyellow";
    ctx.fillRect(0, 0, stage.width, stage.height);
    //esse Rect significa um retangulo preenchido,aqui está dando estilo(css) ao fundo da cobrinha e dizendo o tamnho daquele quadrado laranja
    ctx.fillStyle = "red";
    //aqui esta desenhando a maçã
    ctx.fillRect(ax * tp, ay * tp, tp, tp);
    //reparem que nesse fillRect ele está dizendo as posições que a maçã vai aparecer
    ctx.fillStyle = "green";

    //aqui está desenhando a cobrinha
    for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
      if (trail[i].x == px && trail[i].y == py) {
      
        //if pra se caso px e py que são as posições da cabeça baterem na cauda da cobrinha
        vx = vy = 0;
        tail = 5;

        //condições para se caso o if acima for verdadeiro,ou seja a cobrinha vai ter a velocidade igual a zero no caso parada e vai voltar a ter tamanho 5 mais uma vez,são as condições no caso de uma das formas de dar game over no jogo
      }
    }   

    trail.push({ x: px, y: py });
    while (trail.length > tail) {
      trail.shift();
      
    }

    if (ax == px && ay == py) {
      document.getElementById("score-div").innerHTML = "SCORE: " + tail;
      tail++;
      //if para quando a cobrinha comer a maçã,reparem que está adicionando 1 a tail,ou o tamanho da cobrinha
      ax = Math.floor(Math.random() * qp);
      ay = Math.floor(Math.random() * qp);
      //nessas variáveis ele está reposicionando a maçã que é representada por ax e ay
    }
  }

  function keyPush(event) {
    //o evento do teclado
    
    switch (event.keyCode) {
      //dentro dos parentenses ta acontecendo o evento do keypush e logo após tem o keyCode que é o código da tecla que você apertou
      //e esse switch é como se fosse um bloco de tentativas ou um bloco com varios if,cada case desse é como se fosse um if
      case 37: // tecla seta esquerda
        vx = -vel;
        vy = 0;
        document.getElementById("span1").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span2").style.boxShadow = "0px 10px red";
        document.getElementById("span3").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span4").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        break;
      //isso que tá embaixo desse primeiro case são as condições pra se o evento 37 for executado
      case 38: // tecla seta cima
        vx = 0;
        vy = -vel;
        document.getElementById("span1").style.boxShadow = "0px 10px red"
        document.getElementById("span2").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span3").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span4").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        break;
      case 39: // tecla seta direita
        vx = vel;
        vy = 0;
        document.getElementById("span1").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span2").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span3").style.boxShadow = "0px 10px red"
        document.getElementById("span4").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        break;
        
      case 40: // tecla seta baixo
        vx = 0;
        vy = vel;
        document.getElementById("span1").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span2").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span3").style.boxShadow = "rgba(119, 222, 24, 0.717) 0 10px"
        document.getElementById("span4").style.boxShadow = "0px 10px red"
        
    }
  }
};

function mudar() {
  document.getElementById("over").style.display = "none";
  document.getElementById("over").style.transition = "0.6s";
}