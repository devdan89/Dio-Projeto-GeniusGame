let order = [];
let orderUser = [];
let score = 0;

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

/*
0 - green
1 - red
2 - yellow
3 - blue
 Array contendo o nome das cores em seus respectivos indices. */
let colors = [green, red, yellow, blue];

// Função para gerar cor aleatoria.
let randomGenerator = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  orderUser = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//acendendo a cor sorteada
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number) - 250;
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

//Verificando se a ordem do usuario é a mesma sorteada.
let checkOrder = () => {
  for (let i in orderUser) {
    if (orderUser[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (orderUser.length == order.length) {
    alert(`Score: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};

//Função de click
let click = (color) => {
  orderUser[orderUser.length] = color;
  createColorElement(color).classList.add("selected");

  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

//Alterando a coloração para destaque.
let createColorElement = (color) => {
  for (let i in colors) {
    if (color == i) {
      return colors[i];
    }
  }
};

//Controle de dificuldade.
let nextLevel = () => {
  score++;

  randomGenerator();
};

//Função para finalizar o jogo em caso de derrota.
let gameOver = () => {
  alert(
    `Score: ${score}!\n Você perdeu o jogo!\nClique em OK para iniciar um novo jogo`
  );
  order = [];
  orderUser = [];

  playGame();
};

//Iniciando o jogo
let playGame = () => {
  score = 0;
  alert("Bem vindo ao Genius!\n Iniciando novo jogo!");

  nextLevel();
};

//Conferindo o clique do usuario.
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Chamando a função de inicio do jogo.
playGame();
