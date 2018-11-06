'use strict'
//we are declaring a constrctor that displaying a bunch of images 
///we use the index array to access the 

let sportApparels = []
let elImgContainer = document.getElementById('img-container')
let sport_apparel= document.getElementsByClassName('Sport-image')
function Images (newTitle, path, id, description){
  this.title = newTitle
  this.filePath = path
  this._id = id
  this.clicked = 0
  this. shown = 0
  this.alt = description
}
// We now are creating(initiating) a new instance of the image 
let BackPack = new Images('BackPack', './assets/BackPack.jpg', 'image of a strong BackPack')
let BaseBall = new Images('Baseball', '../assets/Black-Panther.jpg', 'Images of the BaseBall')
let BasketBall = new Images('Basketball', './assets/BasketBall.jpg', 'Images of BasketBall')
let Bowling = new Images('Bowling', './assets/Bowling.jpg', 'Images of the Bowling')
let Football= new Images('Football', './assets/Football.jpg', 'Foootball')
let Futsal= new Images('Futsal, ./assets.Futsal.jpg', 'Images of a Futsal shoes')
sportApparels.push(BasketBall, BaseBall, Bowling, Football, Futsal)

let randomNumber = function() {
  return Math.floor(Math.random() * sportApparels.length) 

let FirstImage
let SecondImage
let ThirdImage

let clickHandler = function(event) {
  if(FirstImage._id === event.target.id) {
    FirstImage.clicked++
  } else if(SecondImage._id === event.target.id) {
    SecondImage.clicked++
  } else {
    ThirdImage.clicked++
  }
  displayImages()
}
}
  let displayImages = function() {
    for(let i = 0; i < sportApparels.length; i++) {
    let elImage = sportApparels[i]
    let randomsportApp= [randomNumber()]
    if(i === 0) {
        FirstImage = randomapparel
    } else if(i === 1) {
        SecondImage = randomapparel
      } else {
        ThirdImage = randomapparel
      }
      elImage.src = randomapparel.filePath
      elImage.setAttribute('id', randomapparel._id)
      randomHero.shown++
      console.log(randomapparel._id, elImage.id)
      elImage.addEventListener('click', clickHandler)
  }
  }
  
  displayImages()
 
