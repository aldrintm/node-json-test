const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('<h1>Hello ... JSON format will be deployed here</h1>')
})

app.get('/endpoint1', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: 'Hello @ endpoint1',
    },
  }) 
})

app.get('/endpoint2', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: 'Hello @ endpoint2',
    },
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
