
// Hourly Line Chart
var lineChart = document.getElementById("line-chart--hourly");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["00-01", "02-05", "06-09", "10-12", "13-15", "16-18", "19-21", "22-23"],
        datasets: [{
            label: 'Traffic',
            lineTension: 0.2,
            backgroundColor: 'rgba(96, 96, 205, 0.2)',
            borderCapStyle: 'square',
            borderWidth: 1,
            borderColor: "#6E75DA",
            pointBorderColor: '#7477bf',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 6,
            data: [0, 3, 9, 7, 17, 15, 19, 17]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Daily Line Chart
var lineChart = document.getElementById("line-chart--daily");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["1","2", "3", "4", "5", "6", "7", "8"],
        datasets: [{
            label: 'Traffic',
            lineTension: 0.2,
            backgroundColor: 'rgba(96, 96, 205, 0.2)',
            borderCapStyle: 'square',
            borderWidth: 1,
            borderColor: "#6E75DA",
            pointBorderColor: '#7477bf',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 6,
            data: [59, 39, 123, 223, 203, 299, 303, 249]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//  Weekly Line Chart
var lineChart = document.getElementById("line-chart--weekly");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "18-24", "25-31", "33-35"],
        datasets: [{
            label: 'Traffic',
            lineTension: 0.2,
            backgroundColor: 'rgba(96, 96, 205, 0.2)',
            borderCapStyle: 'square',
            borderWidth: 1,
            borderColor: "#6E75DA",
            pointBorderColor: '#7477bf',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 6,
            data: [0, 500, 1000, 900, 1450, 1750, 1200, 1500, 1950, 2000, 1700, 2200, 2550]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Monthly Line Chart
var lineChart = document.getElementById("line-chart--monthly");
var myChart = new Chart(lineChart, {

    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
            label: 'Traffic',
            lineTension: 0.2,
            backgroundColor: 'rgba(96, 96, 205, 0.2)',
            borderCapStyle: 'square',
            borderWidth: 1,
            borderColor: "#6E75DA",
            pointBorderColor: '#7477bf',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointRadius: 5,
            pointHoverRadius: 6,
            data: [1229, 1933, 2239, 2669, 3230, 3090, 3777, 4009]
        }]
    },
    options: {
        legend: false,
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var barChart = document.getElementById("bar-chart");
var myChart2 = new Chart(barChart, {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'Visited',
                data: [69, 115, 123, 245, 236, 211, 65],
                backgroundColor: "#7477bf"
            },
            {
                label: 'Signed Up',
                data: [27, 64, 90, 145, 172, 123, 14],
                backgroundColor: "#81C98F",
            }
        ]
    },
    options: {
    	responsive: true,
        scales: {
            xAxes: [{
                    stacked: false
            }],
            yAxes: [{
                    stacked: false
            }]
        },
	}	
});

var doughnutChart = document.getElementById("pie-chart");
var myChart3 = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: [
            "Phones",
            "Tablets",
            "Desktop",
            "IOS",
            "Android"
        ],
        datasets: [{
            data: [35, 67, 47, 73, 23],
            backgroundColor: [
                "#7477bf",
                "#81C98F",
                "#73B1BF",
                "#5D61BF",
                "#4d4c72",
            ]
        }]
    },
    options: {
		responsive: true,
	}	
});