'use strict';
console.log('hi');

let retrievedProducts = localStorage.getItem('myProducts');


let parsedProducts = JSON.parse(retrievedProducts);


let canvasElement = document.getElementById('my-chart');

Chart.defaults.font.size = 20; //eslint-disable-line

Chart.defaults.font.weight = 'bold'; //eslint-disable-line



function renderChart() {
  let productNames = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < parsedProducts.length; i++) {
    productNames.push(parsedProducts[i].name);
    productVotes.push(parsedProducts[i].votes);
    productViews.push(parsedProducts[i].views);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 3,
        backgroundColor: ['orange'],
        borderColor: ['black']
      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 3,
        backgroundColor: ['orange'],
        borderColor: ['black']
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
  new Chart(canvasElement, chartObj);//eslint-disable-line
}

if (retrievedProducts) {
  renderChart();
}

