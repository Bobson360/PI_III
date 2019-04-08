/*
var express = require('express'); 
var app = express();  

app.get('/', function (req, res) {   
	res.send('Hello World!'); 
});  
app.listen(3000, function () {   
	console.log('Example app listening on port 3000!'); 
});

*/


const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , app = express();

/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const sensors = [
  {
    'id': 1234,
    'name': 'DHT22',
    'type': 'temperature',
    'value': 25,
  },
  {
    'id': 4321,
    'name': 'DHT11',
    'type': 'temperature',
    'value': 25,
  }
];

/* Routes */
app.get('/sensors', (req, res) => {
	res.json(sensors)
	countValue()
});

app.get('/sensors/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sensor = sensors.filter((item) => item.id === id);
  
  if (sensor.length <= 0) {
    return res.json({});
  }
  return res.json(sensor[0]);
});

app.post('/sensors', (req, res) => {
  var data = new Date()
  const sensor = {
    'id': req.body.id,
    'name': req.body.name,
    'type': req.body.type,
    'value': req.body.value,
    'year': data.getFullYear(),
    'month': data.getMonth(),
    'day': data.getDay(),
    'time': data.getHours() +':'+ data.getMinutes() +':'+ data.getSeconds()
  };
  sensors.push(sensor);

  res.json(sensor);
  countValue()
});

/* App listen */
app.listen(3000, '0.0.0.0', function()  {
  console.log(`nodejs-backend is running`);
  console.log(`open in http://0.0.0.0:3000/sensors`);
});


function countValue(){
	var valor = 0
	for(var i = 0; i < sensors.length; i++){
		valor += parseFloat(sensors[i].value)
  }
  parseFloat(valor)
  console.log(`Ultima amostra: ${sensors[sensors.length-1].value}`)
  console.log(sensors.length)
	console.log(`A soma é ${valor}`)
	console.log(`A media é ${valor/sensors.length}`)
}
