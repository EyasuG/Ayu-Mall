'use strict'

let elChartContainer = document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

function displayChart() {
  let elChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [sportApparels[0].title,sportApparels[1].title, sportApparels[2].title, sportApparels[3].title,sportApparels[4].title, sportApparels[5].title, sportApparels[6].title,sportApparels[7].title, sportApparels[8].title, sportApparels[9].title, sportApparels[10].title, sportApparels[11].title, sportApparels[12], sportApparels[13].title],
      datasets: [{
        label: '# of clicks',
        data: [sportApparels[0].clicked, sportApparels[1].clicked, sportApparels[2].clicked, sportApparels[3].clicked,sportApparels[4].clicked, sportApparels[5].clicked, sportApparels[6].clicked, sportApparels[7].clicked, sportApparels[8].title, sportApparels[9].clicked, sportApparels[10].clicked, sportApparels[11].clicked, sportApparels[12].clicked, sportApparels[13].clicked],
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 0.5
      },{
        label: '# of shown',
        data: [sportApparels[0].shown, sportApparels[1].shown, sportApparels[2].show, sportApparels[3].show,sportApparels[4].shown, sportApparels[5].show, sportApparels[6].show, sportApparels[7].shown, sportApparels[8].shown, sportApparels[9].shown, sportApparels[10].shown, sportApparels[11].shown, sportApparels[12].shown, sportApparels[13].shown],
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 0.5
      }]

    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
}