const { response } = require('express')
const express = require('express')
const app = express()
const port = 3001

const func = require('./functions')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/gods', (req, res) => {
  func.getGods()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/gods/:name', (req, res) => {
  func.getGod(req.params.name)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/creatures', (req, res) => {
  func.getCreatures()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/creatures/:name', (req, res) => {
  func.getCreature(req.params.name)
  .then(response => {
    res.status(200).send(response);
  })  
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/lore', (req, res) => {
  func.getLores()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/lore/:name', (req, res) => {
  func.getLore(req.params.name)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

// app.post('/owners', (req, res) => {
//   person_model.createOwner(req.body)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

// app.delete('/owners/:oid', (req, res) => {
//   person_model.deleteOwner(req.params.oid)
//   .then(response => {
//     res.status(200).send(response);
//   })
//   .catch(error => {
//     res.status(500).send(error);
//   })
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})
