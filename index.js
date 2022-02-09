var order = [];
let orderUser = [];

//0 - green
//1 - red
//2 - yellow
//3 - blue

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

let colors = [green, red, yellow, blue];

let colorChange = (color, number) => {
  if (!color.classList.contains("selected")) {
    order[order.length] = number;
    setTimeout(() => {
      color.classList.add("selected");
      console.log(color.classList.contains("selected"));
      console.log("Adicionou");
    }, 1000);

    setTimeout(() => {
      console.log(color.classList.contains("selected"));
      color.classList.remove("selected");
      console.log("Removeu");
    }, 3000);

    console.log("O numero sorteado foi: ",order[order.length-1] )
  }
};

let randomColor = () => {
  let rng = null;
  setTimeout(() => {
    for (let i in colors) {
      rng = Math.floor(Math.random() * colors.length);
      console.log(rng);
      console.log("Random Color: ", i);
      colorChange(colors[i], rng);
    }
  }, 10000);
};

randomColor();



