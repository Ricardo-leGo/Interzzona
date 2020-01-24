let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const keys = []
let frames =0;
let interval
let current =0
let balas1 = []
let balas2 =[]
 let varShoot =false
 let counterhints =0


const img  = {
    personaje1: "./assets/scar.png",
    bg: "./assets/bgcy.jpg",
    char:"./assets/char.png",
    nu:"./assets/nu.png"
}
 let leo = img.char
 let nu = img.nu



 class Bg{
 constructor(){


    this.image = new Image()
    this.image.src = img.bg
    this.image.onload= ()=>{
        this.draw()

    }
 }
    draw(){
        ctx.drawImage(this.image, 0,0,canvas.width,canvas.height)
    }
   
 }

class Personaje{
    constructor(x,y,img){
        this.dx=0
        this.dy=0
        this.x = x
        this.y = y
        this.width = 85
        this.height = 240
        this.sx =0
        this.sy=0
        this.alturaprot= 240
        this.fuerzadesalto=12
        this.vy= .03
        this.vx=0
        this.gravity =.98
        this.image = new Image()
        this.image.src = img.char
        this.image.onload= ()=>{
            this.draw()
        }
             
    }
     draw(){

        if(this.y >canvas.height-this.alturaprot){
            this.y = canvas.height -this.alturaprot
        }else{
            this.vy ++
        }
         if(this.sx>=595){
            this.sx = 0}

        ctx.drawImage(this.image,
            this.sx,
            this.sy,
            85,
            240,
            this.x,
            this.y,
            this.width,
            this.height 
                )

    }



       salta(){

        this.vy = -this.fuerzadesalto*2 
    }

    rigth(){
        this.x +=30;
        this.move()
    }
    left(){
        this.x-=30;
        this.move()
    }
    move(){
        this.sx+=85

    }


    shoting(){

            posx = this.x
            posy -= this.y



        
        let posx=0, poy=0, velx=0,vely=0, radio=45
        ctx.beginPath()
        ctx.ctx.arc(posx, posy,radio , 0, Math.PI*2, false);
        ctx.fill()




    }

}






class Personaje2{
    constructor(x,y,img){
        this.dx=0
        this.dy=0
        this.x = x
        this.y = y
        this.width = 85
        this.height = 240
        this.sx =0
        this.sy=0
        this.alturaprot= 240
        this.fuerzadesalto=12
        this.vy= .03
        this.vx=0
        this.gravity =.98
        this.image = new Image()
        this.image.src = img.nu
        this.image.onload= ()=>{
            this.draw()
        }
             
    }
     draw(){

        if(this.y >canvas.height-this.alturaprot){
            this.y = canvas.height -this.alturaprot
        }else{
            this.vy ++
        }
         if(this.sx>=595){
            this.sx = 0}

        ctx.drawImage(this.image,
            this.sx,
            this.sy,
            85*-1,
            240,
            this.x,
            this.y,
            this.width,
            this.height 
                )

    }



       salta(){

        this.vy = -this.fuerzadesalto*2 
    }

    rigth(){
        this.x -=30;
        this.move()
    }
    left(){
        this.x+=30;
        this.move()
    }
    move(){
        this.sx+=85

    }


    shoting(){

            posx = this.x
            posy -= this.y



        
        let posx=0, poy=0, velx=0,vely=0, radio=45
        ctx.beginPath()
        ctx.ctx.arc(posx, posy,radio , 0, Math.PI*2, false);
        ctx.fill()




    }

}





class bullet{
  constructor(x,y) {
    this.x = x
    this.y = y
    this.vy=-5
    this.vx =3


}
  draw() {
    this.y+= this.vy
    this.x+=this.vx
    if (this.y<0){
        this.y = this.y
    }

    ctx.beginPath()
   ctx.arc(this.x, this.y, 35,0,2*Math.PI,false)
   ctx.fill();

}

hintboss(){
    if (this.y<0){
            this.y=canvas.height -120;
    }else{
        this.y+=vy
    }
}
}


const friction = 0.8
const gravity = 0.98
const background = new Bg()
const protaGonista = new Personaje(0,canvas.height-240,img)
const prot2  = new Personaje2(canvas.width-150,canvas.height, img)
console.log(prot2);
const bolita =  new bullet(protaGonista.x,protaGonista.y)

function update(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
        background.draw()
        protaGonista.draw()
        prot2.draw()

    protaGonista.y +=protaGonista.vy
    protaGonista.x += protaGonista.vx
    protaGonista.y += gravity
        // if (varShoot) {
      
        //     // if (bolita.y<0){
        //     //     bolita.y = canvas.height-240
        //     //     bolita.x = protagonista.x
        //     //     }else{
        //     //     bolita.y--

        //     }

            // bolita.draw()

        
        


}

  





    setInterval(update,1000/60)





    function generatebullets() {
        
        const positioniBulletx = protaGonista.x;
        const positioniBullety =  protaGonista.y+500
        console.log(protaGonista.y);
   
    balas1.push(new bullet(120,canvas.height-240 , false))

    // balas2.push(new bullet()
    
  
}


function drawbullets() {

  balas1.forEach(bullet => bullet.draw())
}





document.addEventListener('keydown', ({keyCode})=>{
keys[keyCode]=true


  if(keyCode==37){
        protaGonista.left()
    }else if(keyCode==39){
        protaGonista.rigth()
    }else if(keyCode==32){
        protaGonista.salta()
    }else if (keyCode==82) {
        protaGonista.shoootboos()
// varShoot=true        
    }else if(keyCode==102){
        prot2.rigth()
    }else if(keyCode==100){
        prot2 .left()
    }else if (keyCode==76) {
        prot2 .shoootboos()
// varShoot=true        
    }
})


document.addEventListener('keyup', ({keyCode})=>{
  varShoot=false
  keys[keyCode]=false
   
    
})


