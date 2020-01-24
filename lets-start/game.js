let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const keys = []
let frames =0;
let interval
let current =0
 let variabledePrueba =false
const img  = {
    personaje1: "./assets/scar.png",
    bg: "./assets/bgcy.jpg",
    char:"./assets/char.png"
}




 class Bg{
 constructor(){


    this.image = new Image()
    this.image.src = img.bg
    this.image.onloadw= ()=>{
        this.draw()

    }
 }
    draw(){
        ctx.drawImage(this.image, 0,0,canvas.width,canvas.height)
    }
   
 }

class Personaje{
    constructor(x,y){
        this.dx=0
        this.dy=0
        this.x = x
        this.y = y
        this.width = 85
        this.height = 240
        this.sx =0
        this.sy=0
        this.vely= .03
        this.gravity =.98
        this.image = new Image()
        this.image.src = img.char
        this.image.onload= ()=>{
            this.draw()
        }
             
    }
     draw(){
         // if(this.sx>=595){
         //    this.sx = 0}
        // ctx.drawImage(
        //     this.image,
        //     this.sx,
        //     this.sy,
        //     85,
        //     240,
        //     this.x,
        //     this.y,
        //     this.width,
        //     this.height 
        //     )

        // this.y+=this.vely
        // if(this.y>canvas.height-240 ){
        //         this.y= canvas.height-240

        //     this.vely=0
        // }
        // ctx.beginPath()
        // ctx.arc(200,200,80,0, 2*Math.PI,false)
        // ctx.stroke()
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
        this.y-=400
        this.draw()
        this.vely=0.03


    }

   shoot(){

        this.dy-=1
    if (this.x> canvas.width/2){
        this.dx= (-1)*dx
        
    }    
        ctx.beginPath();
        ctx.arc(this.x+85 +this.dx, this.y+50+this.dy, Math.random()*80, 0, 2 * Math.PI);
        ctx.fill()
        ctx.stroke();
        console.log("hola "+this.dx);
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        // ctx.fillStyle= "yellow";
        // ctx.fill();

        ctx.drawImage(this.image, this.x,this.y,150,400)
    }

    rigth(){
        this.x +=10;
        this.move()

    }
    left(){
        this.x  -=10;
        this.move()
    }

    move(){
        this.sx+=85
        this.x +=30;

    }
    left(){
        this.x -30;
    }


    saltaAdelante(){
        // this.y-=100
        // this.x+=200
        // this.draw()
        // this.vely=0.03

    }
    saltaAtras(){
let distancia= this.x-200

        // while(this.x>distancia){
        //     this.y-=2
        //     this.x-=10
        //     this.draw()
        //     this.vely=0.03
        // }


    }


}
const background = new Bg()
const protaGonista = new Personaje(0,canvas.height-240,img)

function update(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    setInterval(update,1000/30)
    protaGonista.draw()
}
function start(){
    update()
}

start()
// const bolita =new Personaje(0,canvas.height-240,img)
   
//     function update(){
//         setInterval(update,1000/5)
//         ctx.clearRect(0,0,canvas.width,canvas.height)
       
//         bolita.draw()
//          if(variabledePrueba){
//             bolita.shoot()
//          }
        

//     // const background = new Bg()
//     const bolita =new Personaje(0,canvas.height-400,80,img)
   
//     function update(){
//         // intervalo = requestAnimationFrame(update)
//         setInterval(update,1000/120)
//         ctx.clearRect(0,0,canvas.width,canvas.height)
//         // background.draw()

//         bolita.draw()
       
//     }

//         function start(){
//             update()
//         }
//         start() 
    



// document.addEventListener('keydown', ({keyCode})=>{
// keys[keyCode]=true


//     if(keys[32]&&keys[39]){
//         bolita.saltaAdelante()
//     }else if(keys[32]&&keys[37]){
//         bolita.saltaAtras()
//     }else if (keyCode==82) {
//        variabledePrueba = true
//     }else if(keyCode==37){
//         bolita.left()
//     }else if(keyCode==39){
//         bolita.rigth()
//     }else if(keyCode==32){
//         bolita.salta()
//     }
// })


// document.addEventListener('keyup', ({keyCode})=>{
//   variabledePrueba=false
//   keys[keyCode]=false
   
    
// })


