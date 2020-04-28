function Snake() {
  this.x = canvas.width / 2 - scale;
  this.y = canvas.height / 2 - scale;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = new Array();
  this.snakeHead = document.querySelector('.snake-right');
  this.snakeBody = document.querySelector('.snake-body');
  
  this.draw = function(scale) {
    ctx.fillStyle = '#999';
    ctx.drawImage(this.snakeHead, this.x, this.y, scale, scale)

    for(let i = 0; i < this.tail.length; i++) {
      ctx.fillStyle = '#b0cb49';
      ctx.drawImage(this.snakeBody, this.tail[i].x, this.tail[i].y, scale, scale)
    }
  }

  this.update = function(maxWidth, maxHeight) {

    for(var i = 0; i < this.tail.length - 1; i++) {
      if(this.x == this.tail[i].x && this.y == this.tail[i].y) this.reset()
    }

    for(var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if(this.x > maxWidth - scale) this.x = 0;
    if(this.x < 0) this.x = maxWidth;
    if(this.y > maxHeight - scale) this.y = 0;
    if(this.y < 0) this.y = maxHeight;
  }

  this.move = function(direction) {
    switch(direction) {
      case 37:
        this.snakeHead = document.querySelector('.snake-left');
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
      break;
      case 38:
        this.snakeHead = document.querySelector('.snake-up');
        this.ySpeed = -scale * 1;
        this.xSpeed = 0;
      break;
      case 39:
        this.snakeHead = document.querySelector('.snake-right');
        this.xSpeed = +scale * 1;
        this.ySpeed = 0;
      break;
      case 40:
        this.snakeHead = document.querySelector('.snake-down');
        this.ySpeed = +scale * 1;
        this.xSpeed = 0;
      break;
    }
  }

  this.eat = function(fruit) {
    if(this.x == fruit.x && this.y == fruit.y) {
      this.total++;
      document.querySelector('.score .number').innerHTML = this.total
      return true
    }
    return false
  }

  this.reset = function() {
    this.x = canvas.width / 2 - scale;
    this.y = canvas.height / 2 - scale;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = new Array();
    document.querySelector('.score .number').innerHTML = 0;
  }
}