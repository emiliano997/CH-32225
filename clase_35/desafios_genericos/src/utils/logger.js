import winston from 'winston';
import dotenv from 'dotenv';

dotenv.config();

const customLevels = {
  levels: {
    okey: 0,
    adv: 1,

  }
}

const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'http',
      format: winston.format.combine(
        winston.format.colorize({
          colors: {
            error: 'red',
            warn: 'yellow',
            info: 'blue',
            http: 'blackBG red',
            verbose: 'cyan',
            debug: 'magenta',
            silly: 'white',
          }
        }),
        winston.format.simple(),
      )
    }),
    new winston.transports.File({
      filename: 'error.log',
      level: 'warn',
    })
  ]
})

const devLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'verbose',
    })
  ]
})

export const addLogger = (req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
    req.logger = prodLogger;
    req.logger.http(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
  } else {
    req.logger = devLogger;
    req.logger.verbose(`${req.method} en ${req.url} - ${new Date().toLocaleTimeString()}`)
  }

  next()
}