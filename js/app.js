
/* Alert Banner */
const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p class="alertText"><strong>Alert:</strong> You have unread messages</p>
<p class="alert-banner-close">x</p>
</div> `
;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none" }
});

/* End of Alert Banner */


const trafficCanvas = document.getElementById("trafficChart");

let hourlyL = document.getElementById('hourlyLink');
let dailyL = document.querySelector('#dailyLink a');
let weeklyL = document.getElementById('weeklyLink');
let monthlyL = document.getElementById('monthlyLink');

let trafficData = {
    labels: ["12-1", "1-2", "3-4", "5-6", "7-8", "9-10", "11-12"], 
    datasets: [
      { 
        data: [750, 1450, 1500, 2200, 1800, 950, 1350],
          borderWidth: 2,
          borderColor: 'rgb(153 156 224)',
          lineTension: 0.3,
          fill: {
            target: 'origin',
            above: 'rgb(116 119 190 / 53%)',   // Area will be mauve above the origin
            
          }
        }
      ]
    };

    let trafficOptions = { 
        aspectRatio: 2.5, 
        animation: {
        duration: 0
      },
   scales: { 
       y: {
          beginAtZero: true
        }
   }, 
   plugins: {
        legend: {
          display: false
        }
   } 
};

let trafficChart = new Chart(trafficCanvas, { 
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

hourlyL.addEventListener('click', function(event)  {
  event.preventDefault();
  dailyL.classList.remove('active');
  hourlyL.classList.add('active');
  weeklyL.classList.remove('active');
  monthlyL.classList.remove('active');
  trafficChart.data.datasets[0].data = [750, 1450, 1500, 2200, 1800, 950, 1350];
  trafficChart.data.labels = ["12-1", "1-2", "3-4", "5-6", "7-8", "9-10", "11-12"];
  trafficChart.update();
});

dailyL.addEventListener('click', function(event)  {
  event.preventDefault();
  dailyL.classList.add('active');
  hourlyL.classList.remove('active');
  weeklyL.classList.remove('active');
  monthlyL.classList.remove('active');
  trafficChart.data.datasets[0].data = [1500, 1250, 1354, 1339, 1830, 1452, 1820];
  trafficChart.data.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  trafficChart.update();
});
weeklyL.addEventListener('click', function(event)  {
  event.preventDefault();
  dailyL.classList.remove('active');
  hourlyL.classList.remove('active');
  weeklyL.classList.add('active');
  monthlyL.classList.remove('active');
  trafficChart.data.datasets[0].data = [820, 1850, 1654, 1439, 2130, 2052, 1820];
  trafficChart.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
  trafficChart.update();
});
monthlyL.addEventListener('click', function(event)  {
  event.preventDefault();
  dailyL.classList.remove('active');
  hourlyL.classList.remove('active');
  weeklyL.classList.remove('active');
  monthlyL.classList.add('active');
  trafficChart.data.datasets[0].data = [820, 1250, 1554, 1439, 1530, 1650, 1820, 1620, 1200, 975, 1049, 1120];
  trafficChart.data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  trafficChart.update();
});


const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"], 
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100], 
    backgroundColor: '#7477BF',
    borderWidth: 1
    }] 
};

const dailyOptions = { 
    scales: {
        y: {
            beginAtZero: true
    } 
    },
      plugins: {
          legend: {
          display: false
        }
    } 
};

let dailyChart = new Chart(dailyCanvas, { 
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"], 
    datasets: [{
    label: '# of Users', 
    data: [2000, 550, 500], 
    borderWidth: 0, 
    backgroundColor: [
        '#7477BF', 
        '#78CF82', 
        '#51B6C8'
        ] 
    }]
    
};

    const mobileOptions = { 
      aspectRatio: 2.0,
        plugins: {
        legend: {
        position: 'right', 
        labels: {
            boxWidth: 20,
            fontStyle: 'bold' 
            }
        } 
    }
};

        let mobileChart = new Chart(mobileCanvas, { 
            type: 'doughnut',
            data: mobileData,
            options: mobileOptions
        });
        
        const user = document.getElementById("userSearch"); 
        const message = document.getElementById("messageField"); 
        const send = document.getElementById("send"); 

        send.addEventListener('click', () => {
            // ensure user and message fields are filled out
          if (user.value === "" && message.value === "") {
            alert("Please fill out user and message fields before sending");
          } else if (user.value === "" ) {
            alert("Please fill out user field before sending");
          } else if (message.value === "" ) {
            alert("Please fill out message field before sending");
          } else {
            alert(`Message successfully sent to: ${user.value}`);
            
          }
        });


        /*  Settings local storage */
        function save(){
          let checkbox = document.getElementById('checkbox', 'checkbox2');
          let time = document.getElementById('timezone');
          localStorage.setItem('checkbox', checkbox.checked);
          localStorage.setItem('checkbox2', checkbox2.checked);
          localStorage.setItem('time', time.value);
      }
      
      function load(){    
          let checked = JSON.parse(localStorage.getItem('checkbox'));
          let checked2 = JSON.parse(localStorage.getItem('checkbox2'));
          let time = (localStorage.getItem('time'));
          document.getElementById("checkbox").checked = checked;
          document.getElementById("checkbox2").checked = checked2;
          if(time !== null) {
            document.getElementById("timezone").value = time;
          }
      }

        function del(){
          location.reload();
          localStorage.clear()
      
      }
      load();

      let bellalert = document.querySelector('.bell');
      let dropdown = document.querySelector('.dropdown-content');

      bellalert.addEventListener('click', function() {
        dropdown.style.display = 'block';

      }
    );
    