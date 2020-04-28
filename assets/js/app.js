const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const scale = window.innerWidth > 1024 ? 25 : 30;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var speed = 150;

input = new InputHandler();
snake = new Snake();
fruit = new Fruit();

fruit.pickLocation(rows, columns);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snake.update(canvas.width, canvas.height);
  snake.draw(scale);
  fruit.draw(scale);

  if(snake.eat(fruit)) {
    fruit.pickLocation(rows, columns);
  }
}

setInterval(() => {
  gameLoop()
}, speed)