'use strict';

console.log('testing');

// GLOBALS

let productsArray = [];

let votingRounds = 25;


//DOM WINDOW
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('result-container');



//CONSTRUCTOR FUNCTION
function Product (name,fileExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}




// HELPER FUNCTIONS/UTILITIES
function renderImg() {
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();

  // TODO: Make sure the images are unique
  // Compare Img 1 & Img 2 & Img 3 while they are the same get a new randomIndex
  // could this  be stored in another way
  // let randomImage = [imgOneIndex,imgTwoIndex,imgThreeIndex];
  while(imgOneIndex === imgTwoIndex ||imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {

    imgOneIndex = randomIndex();
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }
  // for(let i = 0; i < randomImage.length; i++) {
  //   randomImage[i];
  // }
  imgOne.src = productsArray[imgOneIndex].image;
  imgOne.title = productsArray[imgOneIndex].name;
  imgOne.alt = `this is an image of the product ${productsArray[imgOneIndex]}.name`;
  imgTwo.src = productsArray[imgTwoIndex].image;
  imgTwo.title = productsArray[imgTwoIndex].name;
  imgTwo.alt = `this is an image of the product ${productsArray[imgTwoIndex]}.name`;
  imgThree.src = productsArray[imgThreeIndex].image;
  imgThree.title = productsArray[imgThreeIndex].name;
  imgThree.alt = `this is an image of the product ${productsArray[imgThreeIndex].name}`;

  // TODO: increase the views on the images
  productsArray[imgOneIndex].views++;
  productsArray[imgTwoIndex].views++;
  productsArray[imgThreeIndex].views++;

}


function randomIndex() {
  return Math.floor(Math.random() * productsArray.length);
}


function handleImgClick(event) {
  // Identify the image that was clicked
  let imgClicked = event.target.title;
  console.dir(imgClicked);

  //TODO: Increase the number of clicks on the image

  for(let i = 0; i < productsArray.length; i++) {
    if(imgClicked === productsArray[i].name) {
      productsArray[i].votes++;
    }
  }
  //TODO: decrement the voting rounds
  votingRounds--;

  // TODO: rerender of Imgs
  renderImg();

  // TODO: once votings are done - stop the click

  if(votingRounds === 0){
    imgContainer.removeEventListener('click',handleImgClick);
  }
}

function handleShowResults(){
  if(votingRounds === 0) {
    for(let i = 0; i < productsArray.length; i++){
      let productList = document.createElement('li');
      productList.textContent = `${productsArray[i].name}: Views: ${productsArray[i].views} & Votes: ${productsArray[i].votes}`;
      console.log(productList);
      resultsList.appendChild(productList);
    }
    resultsBtn.removeEventListener('click',handleShowResults);
  }
}
// EXECUTABLE CODE

let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep','png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');


productsArray.push(bag,banana,bathroom, boots, breakfast, bubblegum,chair,cthulu,dogDuck,dragon,pen,petSweep,scissors,shark,sweep,tauntaun,unicorn,waterCan,wineGlass);

renderImg();

imgContainer.addEventListener('click',handleImgClick);
resultsBtn.addEventListener('click',handleShowResults);

console.log(resultsBtn);