// The animations
let ani;
let aniImg = document.getElementById('ani')

let micky;
let mickyImg = document.getElementById('micky')

let thecouple;
let thecoupleImg = document.getElementById('thecouple')

let owen;
let owenImg = document.getElementById('owen')

let sara;
let saraImg = document.getElementById('sara')

let jernie;
let jernieImg = document.getElementById('jernie')

let dalton;
let daltonImg = document.getElementById('dalton')

let maddi;
let maddiImg = document.getElementById('maddi')

let shelbi;
let shelbiImg = document.getElementById('shelbi')

function setup(){

  ani = anime({
    targets: '#ani',
    duration:200,
    translateY:-50,
    easing: 'easeInOutSine',
  })

  micky = anime({
    targets: '#micky',
    duration:200,
    translateY:-70,
    easing: 'easeInOutSine',
  })

  thecouple = anime({
    targets: '#thecouple',
    duration:200,
    translateY:0,
    easing: 'easeInOutSine',
  })

  owen = anime({
    targets: '#owen',
    duration:200,
    translateY:0,
    easing: 'easeInOutSine',
  })

  sara = anime({
    targets: '#sara',
    duration:200,
    translateY:0,
    easing: 'easeInOutSine',
  })

  jernie = anime({
    targets: '#jernie',
    duration:250,
    translateY:-110,
    easing: 'easeInOutSine',
  })

  dalton = anime({
    targets: '#dalton',
    duration:250,
    translateY:-110,
    easing: 'easeInOutSine',
  })

  maddi = anime({
    targets: '#maddi',
    duration:250,
    translateY:0,
    easing: 'easeInOutSine',
  })

  shelbi = anime({
    targets: '#shelbi',
    duration:250,
    translateY:0,
    easing: 'easeInOutSine',
  })

  ani.pause();
  micky.pause();
  thecouple.pause();
  owen.pause();
  sara.pause();
  jernie.pause();
  dalton.pause();
  maddi.pause();
  shelbi.pause();

}

function mousePressed(){

  if (mouseY > -430){
    if (mouseX > aniImg.x && mouseX < aniImg.x + aniImg.width){
     ani.play();
     aniImg.src=('images/ani2.png')
    }

    if (mouseX > mickyImg.x && mouseX < mickyImg.x + mickyImg.width){
     micky.play();
     mickyImg.src=('images/micky2.png')
    }

    if (mouseX > thecoupleImg.x && mouseX < thecoupleImg.x + thecoupleImg.width){
     thecouple.play();
     thecoupleImg.src=('images/thecouple2.png')
    }

    if (mouseX > owenImg.x && mouseX < owenImg.x + owenImg.width){
     owen.play();
     owenImg.src=('images/owen2.png')
    }

    if (mouseX > saraImg.x && mouseX < saraImg.x + saraImg.width){
     sara.play();
     saraImg.src=('images/sara2.png')
    }

    if (mouseX > jernieImg.x && mouseX < jernieImg.x + jernieImg.width){
     jernie.play();
     jernieImg.src=('images/jernie2.png')
    }

    if (mouseX > daltonImg.x && mouseX < daltonImg.x + daltonImg.width){
     dalton.play();
     daltonImg.src=('images/dalton2.png')
    }

    if (mouseX > maddiImg.x && mouseX <maddiImg.x + maddiImg.width){
     maddi.play();
     maddiImg.src=('images/maddi2.png')
    }

    if (mouseX > shelbiImg.x && mouseX <shelbiImg.x + shelbiImg.width){
     shelbi.play();
     shelbiImg.src=('images/shelbi2.png')
    }

  }
}
