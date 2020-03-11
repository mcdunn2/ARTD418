let myPaths = document.querySelectorAll('path')

function setup(){

anime({
  targets: myPaths[0],
  translateX: -300,
  translateY: 100

})

anime({
  targets: myPaths[1],
  translateX: 300

})

anime({
  targets: myPaths[6],
  translateX: 300

})
}

function mousePressed() {
anime({
  targets: document.querySelectorAll('image'),
  translateX: 100,
  scale: 0.25

})

}
