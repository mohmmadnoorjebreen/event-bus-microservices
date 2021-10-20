const express = require('express');


const axios = require('axios')
const cors = require('cors');
const app = express();

app.use(cors());


const  events =[];

app.use(express.urlencoded({extended: true}));

app.use(express.json())


app.post('/event', (req, res) => {
const event = req.body;
events.push(event);
  axios.post('http://localhost:4000/event', event)
  axios.post('http://localhost:3500/event', event)
  axios.post('http://localhost:4500/event', event)
  axios.post('http://localhost:4200/event', event)


  res.send({status: 200})
});

app.get('/event', (req, res) => {
  res.send(events) 	
});

app.listen(5000, () => {
    console.log(`Server started on 5000`);
});