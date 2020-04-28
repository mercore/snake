function Fruit() {
  this.x;
  this.y;
  this.apple = document.querySelector('.apple')

  this.pickLocation = function(rows, columns) {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  }

  this.draw = function(scale) {
    ctx.fillStyle = '#4cafab';
    ctx.drawImage(this.apple, this.x, this.y, scale, scale)
  }
}