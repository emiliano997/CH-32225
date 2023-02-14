import jwt from "jsonwebtoken";

const PRIVATE_KEY = "my_secret_key";

export const generateToken = (user) => {
  return jwt.sign(user, PRIVATE_KEY, { expiresIn: "5m" });
};

export const authToken = (req, res, next) => {
  const token = req.headers["Authorization"] || req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, PRIVATE_KEY, (err, credentials) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = {
      name: credentials.name,
      email: credentials.email,
    };
    next();
  });
};
