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
// let resultsList = document.getElementById('result-container');
let ctx = document.getElementById('my-chart');





//CONSTRUCTOR FUNCTION
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${fileExtension}`;
  this.votes = 0;
  this.views = 0;
}




// HELPER FUNCTIONS/UTILITIES
function renderImg() {


  let indexArray = [];

  while (indexArray.length < 6) {
    let randomNumber = randomIndex();
    if(!indexArray.includes(randomNumber)) {
      indexArray.unshift(randomNumber);
    }
  }
  console.log(indexArray);

  // let imgOneIndex = randomIndex();
  // let imgTwoIndex = randomIndex();
  // let imgThreeIndex = randomIndex();


  // while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {


  let imgOneIndex = indexArray.pop();
  let imgTwoIndex = indexArray.pop();
  let imgThreeIndex = indexArray.pop();


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


// Render Chart Function

function renderChart() {
  let productNames = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < productsArray.length; i++) {
    productNames.push(productsArray[i].name);
    productVotes.push(productsArray[i].votes);
    productViews.push(productsArray[i].views);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 3,
        backgroundColor:['orange'],
        borderColor:['black']
      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 3,
        backgroundColor:['orange'],
        borderColor:['black']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  };
  // two arguments being passed in to create new Chart constructor
  new Chart(ctx, chartObj);//eslint-disable-line
}


function handleImgClick(event) {
  // Identify the image that was clicked
  let imgClicked = event.target.title;
  console.dir(imgClicked);

  //TODO: Increase the number of clicks on the image

  for (let i = 0; i < productsArray.length; i++) {
    if (imgClicked === productsArray[i].name) {
      productsArray[i].votes++;
    }
  }
  //TODO: decrement the voting rounds
  votingRounds--;

  // TODO: rerender of Imgs
  renderImg();

  // TODO: once votings are done - stop the click

  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleImgClick);
  }
}

function handleShowResults() {
  if (votingRounds === 0) {
    // for (let i = 0; i < productsArray.length; i++) {
    //   let productList = document.createElement('li');
    //   productList.textContent = `${productsArray[i].name}: Views: ${productsArray[i].views} & Votes: ${productsArray[i].votes}`;
    //   console.log(productList);
    //   resultsList.appendChild(productList);
    // }
    renderChart();
    resultsBtn.removeEventListener('click', handleShowResults);

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
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');


productsArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

renderImg();

imgContainer.addEventListener('click', handleImgClick);
resultsBtn.addEventListener('click', handleShowResults);

// let imgOneIndex = randomIndex();
// let imgTwoIndex = randomIndex();
// let imgThreeIndex = randomIndex();


// while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {

//   imgOneIndex = randomIndex();
//   imgTwoIndex = randomIndex();
//   imgThreeIndex = randomIndex();
// }
