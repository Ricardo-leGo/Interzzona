const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

class Earth {
  constructor(){
    this.x = 0
    this.y = 0
    this.height = canvas.height
    this.width = canvas.width
    this.img = new Image()
    this.img.src = 'https://miro.medium.com/max/2968/1*FyRhNtrlLqdt3Gl0jMzGDQ.png'
    this.img.onload = () => {
      this.draw()
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

class Flash {
  constructor(){
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.jumpStrenght = 12
    this.gravity = 10
    this.width = 80
    this.height = 80
    this.animate = 0
    this.position = 0
    this.img = new Image()
    this.img.src = 'https://i.postimg.cc/4xJz19BJ/db987eb-c7bb80d1-b7e7-414d-864d-14309f27ee11.png'
    this.img.onload = () => {
      this.draw()
    }
  }
  draw(){
    if(this.y > canvas.height - this.height){
        this.y = canvas.height - this.height
      }else{
        this.vy++
      }
      ctx.drawImage(
        this.img,
        this.animate * 64 ,
        this.position * 64,
        64,
        64,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
  moveLeft(){
    this.vx--
    this.position = 1
  }
  moveRight(){
    this.vx++
    this.position = 2
  }
  jump(){
    //    this.jumpStrenght = 12

    this.vy = -this.jumpStrenght * 2
  }
}

let frames = 0;
const friction = 0.8
const gravity = 0.98
const flash = new Flash()
const earth = new Earth()

const clearCanvas = () => {
  ctx.clearRect(0,0,canvas.width, canvas.height)
}
const checkColitions = () => {
  if(flash.x <= 0 - 13) flash.x = canvas.width -flash.width+13
  if(flash.x > canvas.width -flash.width + 13) flash.x = -13
}
const upload = () => {
  frames++
  clearCanvas()
  earth.draw()
  flash.draw()
  flash.y += flash.vy
  flash.x += flash.vx
  flash.y += gravity
  checkColitions()
  if(frames % 15 === 0) {
    if(flash.animate === 3){
      flash.animate = 0
    }else{
      flash.animate++
    }
  }
}

const interval = setInterval(upload, 1000/60)


//Event listeners
document.onkeydown = e => {
  switch(e.keyCode){
    case 37:
      flash.moveLeft()
      return
    case 39:
      flash.moveRight()
      return
      case 38:
      flash.jump()
      return
  }
}
document.onkeyup = e => {
  flash.vx = 0
}