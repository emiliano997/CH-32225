import express from 'express';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const accountSid = process.env.accountSid
const authToken = process.env.authToken
const phoneNumber = process.env.phoneNumber

const client = twilio(accountSid, authToken);

app.get('/sms', async (req, res) => {
  const { nombre, producto } = req.query;

  const result = await client.messages.create({
    body: `Gracias, ${nombre}, tu solicitud de producto ${producto}, ha sido aprobada`,
    from: phoneNumber,
    to: '+541134853029'
  })
  res.json({ result })
})

app.listen(3000, console.log('Server on port 3000'))