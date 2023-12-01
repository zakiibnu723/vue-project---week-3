const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // Parse JSON requests

app.post('/', (req, res) => {
  res.json('Hello World!')
})

app.post('/login', (req, res) => {
    // res.send('About Us!')
    const username = 'ibnu zaki';
    const password = '27';

    if (req.body.username !== username) {
      res.json({
        status: 'Error: username not found.'
      })
    }

    if (req.body.password !== password) {
      res.json({
        status: 'error: invalid pasword.'
      })
    }

    res.json({
      status: 'Success!'
    })
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})