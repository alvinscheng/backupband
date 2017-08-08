const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use('/', express.static(path.join(__dirname, 'client')))

app.listen(3000, () => {
  console.log('Listening on Port 3000...')
})
