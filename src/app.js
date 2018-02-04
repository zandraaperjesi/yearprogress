const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var serveStatic = require('serve-static')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
app.use(serveStatic('./client/dist'))

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.get('/time', (req, res) => {
  let calced = calcTime()
  res.send({
    time: calced
  })
})

function calcTime () {
  const nowDate = new Date('2018.12.31').getTime() - Date.now()
  const timeLeft = nowDate / 31556952000
  return 1 - timeLeft
}

app.listen(process.env.PORT || 8081)
