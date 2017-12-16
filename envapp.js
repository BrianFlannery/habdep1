
const express = require('express')
const app = express()
var exec = require('child_process').exec

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/env', (req, res) => function(res) {
    exec('bash -c "env | sort"', function(error, stdout, stderr) {
      res.send('<pre>' + stdout.toString() + '</pre>')
    })
  }(res)
)

app.listen(process.env.PORT, () => console.log('Example app listening on port ' + process.env.PORT))
