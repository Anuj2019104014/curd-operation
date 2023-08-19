const express=require('express')
const bodyparser=require('body-parser')
const cors=require ('cors');

const { createLogger, format, transports } = require('winston')

const logger = createLogger({
    level: 'debug',
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD'T'HH:mm:ss.SSSZ"
      }),
      format.json()
    ),
    transports: [new transports.Console()]
  });

  msg = 'RSAP0010E: Severe problem detected'
logger.error(msg)
msg = 'RSAP0001I: Transaction OK'
logger.info(msg)

var app=express();
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())

var fetch=require('./fetch')
app.use("/fetch",fetch)

app.listen(3005)
console.log('server listen port no 3005');

