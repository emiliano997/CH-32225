import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import winston from "winston";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const comparePassword = (user, password) =>
  bcrypt.compareSync(password, user.password);

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "silly",
      format: winston.format.combine(
        winston.format.colorize({
          all: true,
        }),
        winston.format.simple(),
        winston.format.label({ label: "[LOGGER]" }),
        winston.format.printf(
          (info) => `${info.label} ${info.level}: ${info.message}`
        )
      ),
    }),
    new winston.transports.File({
      level: "error",
      filename: "logs/error.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});

export const addLogger = (req, res, next) => {
  req.logger = logger;
  req.logger.http(`${req.method} ${req.url}`);
  next();
};
