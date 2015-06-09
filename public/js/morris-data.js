var morrisData = [{
            time: getTime(),
            total: 0,
            positive: 0,
            negative: 0,
            neutre: 0,
            input_rate:0
        }];

var morrisChart= Morris.Area({
        element: 'morris-area-chart',
        data: morrisData,
        xkey: 'time',
        ykeys: ['total', 'positive', 'negative', 'neutre','input_rate'],
        labels: ['Total tweets', 'Positive tweets', 'Negative tweets', 'Neutre tweets','Input rate'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
