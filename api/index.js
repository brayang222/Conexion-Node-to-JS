const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000;

let transactionArr = [];

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json({
  type: "*/*"
}));

app.use(cors());

app.get('/transactions', (req, res) => {
  res.send(JSON.stringify(transactionArr)); 
})

app.post('/transactions', (req, res) => {
  let transaction = req.body;
  transactionArr.push(transaction);
  res.send(JSON.stringify("guardado"));
  console.log(transactionArr);
})

app.listen(port, () => {
  console.log(`Ejecutando en http:localhost:${port}`);
})



