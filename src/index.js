var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var result={};
var DEBUG = false;
app.get('/', function (req, res) {
    app.use(express.static(__dirname + '/../public'));
    app.use('/bower_components',  express.static(__dirname + '/../bower_components'));
    res.sendfile(__dirname + '/index.html');
    result.positive=0;
    result.total=0;
    result.negative=0;
    result.neutre=0;
    result.input_rate=0;
    result.debug=DEBUG;
});

app.post('/post', function (req, res) {
    if(DEBUG){
        console.log("recieved post !");        
    }
    req.on('data', function(data) {
        if(DEBUG){
           console.log("data:"+data);    
        }
        data = JSON.parse(data);
       result.total= +result.total + +data.total;
       result.positive= +result.positive + +data.positive;
       result.negative= +result.negative + +data.negative;
       result.neutre= +result.neutre + +data.neutre;
       result.input_rate=data.input_rate;
       result.morrisPoint={
            total:data.total,
            positive: data.positive,
            negative: data.negative,
            neutre: data.neutre,
            input_rate: data.input_rate
       };
    });

    req.on('end', function() {
    if(DEBUG){
       console.log("result:"+JSON.stringify(result));    
    }
        io.sockets.emit('post data', result);
        res.send('OK');
    });
});

io.on('connection', function (socket) {
    console.log('received connection');
});

http.listen(3000, '0.0.0.0', function() {
    console.log('listening on *:3000');
});
