'use strict'

import express from 'express'
import middlewares from './middlewares'
import cors from 'cors'
import session from 'express-session'

var whitelist = ['http://127.0.0.1:8080', 'http://localhost:8080']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, // not 127.0.0.1
  methods:['GET', 'POST'],
  credentials: true
};

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8099

app.use(session({
  secret: 'aurora bonus',
  cookie: {maxAge: 60* 60 * 1000}
}));

app.set('port', port)
app.use(cors(corsOptions))

// Middlewares are imported here.
middlewares(app)


// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
