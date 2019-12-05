const express = require('express')
const path = require('path')
require('dotenv/config')

const app = express()

app.disabled('X-Powered-By')
app.use('/', express.static(path.join(__dirname, '..', 'public')))

app.listen(process.env.PORT, () => {
  console.group()

  console.log('')
  console.log('=================================================')
  console.log(`🚀  Your web running on http://localhost:${process.env.PORT}`)
  console.log('=================================================')
  console.log('')

  console.groupEnd()
})
