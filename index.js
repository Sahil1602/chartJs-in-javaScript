
let myChart = document.getElementById('my-chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontColor = 'darkBlue';
Chart.defaults.global.defaultFontSize = 12;

let massChart = new Chart(myChart, {
  type: 'doughnut', // bar horizontalbar pie line doughnut raddar colorarea
  data: {
    labels: ['Mumbai','Delhi','Bangalore','Hyderabad','Kolkata'],
    datasets: [{
      label: 'population(2011)',
      data: [ 12442373, 11007835, 8436675, 6809970, 4486679 ],
      backgroundColor: ['green', 'coral', 'cyan', 'brown', 'red'],
      borderWidth: 1,
      borderColor: 'lightGrey',
      hoverBorderWidth: 3,
      hoverBorderColor: 'white'
    }],
  
  },
  options: {
    cutoutPercentage: 70,
    rotation: Math.PI * 0.5,
    animation:{
      animateScale: true
    },
    title:{
      display: true,
      text: 'Largest cities in India',
      fontSize: 25
    },
    legend:{
      display: true,
      position: 'left',
      labels:{
        fontColor: 'red'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        top:0,
        bottom:0
      },
      tooltips:{
        enabled: true
      }
    }
  }
})