let canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')



/*---------------------------------------------------*/

var container_Three = document.querySelector(".uno");

let x = container_Three.clientWidth; 
let  y = container_Three.clientHeight;



let  aspect = (x/y) /*Consistent whit css*/;
let  section = x;

let scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0x000000, 0.1, 3 );
var light = new THREE.PointLight( 0xffffff )
let camara = new THREE.PerspectiveCamera(
        /*fov*/         36,
        /*aspect*/      1.5,
        /*near*/        5,
        /*far*/         1000 );
// scene.background = new THREE.Color(0xe1ddd2)
let renderer = new THREE.WebGLRenderer({alpha:true});

/*******************************/




const keys = []
let frames =0;
let interval
let current =0
let balas1 = []
let balas2 =[]
let varShoot =false
let varShoot2 =false
let counterhints =0

        let i = 0

let life1 = 50
let life2 = 50
let lifeboss = 5000
let segundos = 60

const img  = {
    bg: "./assets/bgcy.jpg",
    char:"./assets/char.png",
    nu:"./assets/nu2.png",
    boss: "./aseets/boss.png"
}

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

class FinalBoss{
    constructor(a){
    this.a = a
    this.x = canvas.width/2
    this.y = 100
    this.b = 0
    // this.parametro = b * Math.PI / 180
    this.radio = 100
    this.vx = -3
    this.vy = -3
    this.colorsBoss = ['rgb(255,90,130)','rgb(189,45,255)','rgb(90,139,121)' ]
    }

    draw(){


        if (i<360) {
            i++
        }else{
            i=0
        }


        let ang = (i*Math.PI)/180
        let sen = (Math.sin(ang))
        this.y = sen

            ctx.beginPath()
            ctx.arc(
                this.x,
                this.y*100*(this.a*.2)+60*this.y,
                this.radio,
                0,
                Math.PI,
                false)
            ctx.fillStyle = this.colorsBoss[this.a]
            ctx.fill()
    }
    atack(){
        let angAtack = Math.PI/11
    
        if(frames>= 400){
            
            
         for (let i = 0; i < 12; i++) {
                ctx.beginPath()
                ctx.arc(
                canvas.width/2  + Math.cos(angAtack*i)*this.radio,
                50            +  Math.sin(angAtack*i)*this.radio,
               15,
                0,
                2*Math.PI,
                false)
                ctx.shadowColor = 'white';
                ctx.shadowBlur = 5;
                ctx.fillStyle = 'rgb(255,90,130)'
                ctx.fill()
                ctx.closePath()
            }


            this.radio+=1
            if(this.radio >canvas.width){
                this.radio = 100
            }

             if (this.radio == Math.floor(protaGonista.y)){

            life1 = life1 -10  
            life2 = life2 -10
            } 
             }
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


   generatebullets() {
        const positioniBulletx = protaGonista.x;
        const positioniBullety =  protaGonista.y+500
        

        if (balas1.length >=20 && balas1[10].y<0 ){
            balas1.splice(0,19)
        }else{

            balas1.push(new bullet(
               (protaGonista.x+ 85)+(Math.random()*50),
                (protaGonista.y+50)+Math.random()*40,
                Math.random()*35,false))
        }

    }

    drawbullets() {
                balas1.forEach(bullet => bullet.draw())
                if (varShoot){
                    lifeboss=lifeboss -20
                    console.log(lifeboss);
                    if(lifeboss<=0){
                        win()
                        console.log(lifeboss);
                    }
                }
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
            this.vy++
        }
         if(this.sx>269){
            this.sx = 0}

        ctx.drawImage(this.image,
            this.sx,
            this.sy,
           595/7,
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
        this.x+=30;
        this.move()
    }
    left(){
        this.x-=30;
        this.move()
    }
    move(){
        this.sx+=595/7

    }

generatebullets() {
        const positioniBulletx = prot2.x;
        const positioniBullety =  prot2.y+500
        

        if (balas2.length >=20 && balas2[10].y<0 ){
            balas2.splice(0,19)
        }else{

            balas2.push(new bullet2(
               (prot2.x-38.5)+(Math.random()*50),
                (prot2.y+50)+Math.random()*40,
                Math.random()*35,false))
        }

    }
drawbullets() {
    balas2.forEach(bullet2 => bullet2.draw())
                    if (varShoot2){
                    lifeboss=lifeboss -20
                    console.log(lifeboss);
                    if(lifeboss<=0){
                        win()
                        console.log(lifeboss);
                    }
                }
    }
}
class bullet{
  constructor(x,y,radio) {
    this.x = x
    this.y = y
    this.vy=-5
    this.vx =5
    this.radio = radio
     // this.color =`rgb(${Math.floor(Math.random()*255)},
     //                 ${Math.floor(Math.random()*255)},  
     //                 ${Math.floor(Math.random()*255)})`
}
   
  draw() {
    this.y+= this.vy
    this.x+=this.vx
    if (this.y<0){
        this.y = this.y
    }

   ctx.beginPath()
   ctx.arc(this.x, this.y, this.radio,0,2*Math.PI,false)
   ctx.fillStyle= `rgb(${Math.floor(Math.random()*255)},
                     ${Math.floor(Math.random()*255)},  
                     ${Math.floor(Math.random()*255)})`
        ctx.fill();

    }
}
class bullet2{
  constructor(x,y,radio) {
    this.x = x
    this.y = y
    this.vy=-5
    this.vx =5
    this.radio = radio
     // this.color =`rgb(${Math.floor(Math.random()*255)},
     //                 ${Math.floor(Math.random()*255)},  
     //                 ${Math.floor(Math.random()*255)})`
    }
   
  draw() {
    this.y+= this.vy
    this.x-=this.vx
    if (this.y<0){
        this.y = this.y
    }

   ctx.beginPath()
   ctx.arc(this.x, this.y, this.radio,0,2*Math.PI,false)
   ctx.fillStyle= `rgb(${Math.floor(Math.random()*255)},
                     ${Math.floor(Math.random()*255)},  
                     ${Math.floor(Math.random()*255)})`
        ctx.fill();

    }
}


const friction = 0.8
const gravity = 0.98
const background = new Bg()
const boss = new FinalBoss()
const protaGonista = new Personaje(0,canvas.height-240,img)
const prot2  = new Personaje2(canvas.width-85,canvas.height, img)

function update(){
    frames+=1
    ctx.clearRect(0,0, canvas.width, canvas.height)
        background.draw()
        protaGonista.draw()
        prot2.draw()


    protaGonista.y +=protaGonista.vy
    protaGonista.x += protaGonista.vx
    protaGonista.y += gravity
    prot2.y +=prot2.vy
    prot2.x += prot2.vx
    prot2.y += gravity
//    bolita.draw()
        
         protaGonista.drawbullets()
    if (varShoot){
           protaGonista.generatebullets()
        }
        prot2.drawbullets()
    if (varShoot2){
           prot2.generatebullets()
        }

      

        for (let i = 0; i < 3; i++) {
            new FinalBoss(i).draw()
        };

        boss.atack()

        if (life1 == 0 || life2== 0 ){
            gameOver()
        }

    

        

    ctx.beginPath()
        ctx.rect(20, 30  , 450*life1/50, 50)
        ctx.rect(canvas.width-475,30,450*life2/50, 50)
        ctx.lineWidth = '6'
        ctx.fillStyle = "#FF0000"
        ctx.stroke()
        ctx.fill()
    ctx.closePath()
}

    let startGame = setInterval(update,1000/60)



document.addEventListener('keydown', ({keyCode})=>{
keys[keyCode]=true


  if(keyCode==37){
        protaGonista.left()
    }else if(keyCode==39){
        protaGonista.rigth()
    }else if(keyCode==32){
        protaGonista.salta()
    }else if (keyCode==82) {
        varShoot=true     
    }else if(keyCode==80){
        prot2.rigth()
    }else if(keyCode==79){
        prot2.left()
    }else if(keyCode==16){
        prot2.salta()
    }else if (keyCode==76) {
         varShoot2=true        
    }
})


document.addEventListener('keyup', ({keyCode})=>{
  varShoot=false
  varShoot2=false
  keys[keyCode]=false
  if (balas1.length>31||balas1[0].y==0){
        balas1.splice(1,balas1.length)
  }
if (balas2.length>31||balas2[0].y==0){
        balas2.splice(1,balas2.length)
  }

   
    
})
    









    

    renderer.setSize(section,y);
    
container_Three.appendChild(renderer.domElement);


var geometry = new THREE.BoxGeometry( 2, 2, 2);
var material = new THREE.MeshNormalMaterial();
var cube     = new THREE.Mesh( geometry, material );

    



function gameOver(){
    clearInterval(startGame)
        ctx.font = "80px Arial"
        ctx.fillText('Perdiste', canvas.width/2, canvas.height/2)

}
function win(){
    clearInterval(startGame)
            ctx.font = "80px Arial"
        ctx.fillText('Ganaste', canvas.width/2,  canvas.height/2)
        scene.add( cube );
        scene.add( light );
}








camara.position.z = 15;











// console.log(THREE.EventDispatcher,
//  THREE.MOUSE,
//  THREE.Quaternion,
//  THREE.Spherical,
//  THREE.TOUCH,
//  THREE.Vector2,
//  THREE.Vector3);

var animate = function () {
                requestAnimationFrame( animate );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render( scene, camara );
            };


            animate();
