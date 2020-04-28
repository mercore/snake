function InputHandler() {
  document.addEventListener('keydown', function(e) {
    snake.move(e.keyCode)
  });

  var arrows = document.querySelectorAll('.arrow img')
  arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function() {
      let direction
      if(this.alt == 'arrow-left') direction = 37
      if(this.alt == 'arrow-up') direction = 38
      if(this.alt == 'arrow-right') direction = 39
      if(this.alt == 'arrow-down') direction = 40

      snake.move(direction)
    })
  })
}