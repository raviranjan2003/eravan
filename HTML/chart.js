const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['23-05-2023', '22-05-2023', '21-05-2023', '20-05-2023', 
        '19-05-2023','18-05-2023','17-05-2023','16-05-2023','15-05-2023',
        '14-05-2023','13-05-2023','12-05-2023'],
        datasets: [{
            label: 'Price Trend',
            data: [360.45, 360.45, 360.45, 360.45, 360.451, 360.45,360.45, 360.45, 360.45, 360.45, 360.45, 360.45],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
