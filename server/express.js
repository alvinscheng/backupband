const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT || 3000, () => {
  console.log('Backup Band is listening...')
})
