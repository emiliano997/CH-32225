import express from "express";
import nodemailer from "nodemailer";

const app = express();

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "emi.perez997@gmail.com",
    pass: "vgqbbqwxkovxfemi",
  },
});

const transportMailtrap = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f6d695b991bc47",
    pass: "2cdc6468a4478b"
  }
});

const mails = ["german_boca@gmail.com", "emi@gmail.com"]

app.get("/mail", async (req, res) => {
  const result = await transportMailtrap.sendMail({
    from: "coderhouse@gmail.com",
    to: mails,
    subject: "Prueba de envío de mail",
    html: `
      <div>
        <h1>Prueba de envío de mail</h1>
        <img src="cid:prueba_1" />
      </div>
    `,
    attachments: [
      {
        filename: "prueba_1.jpg",
        path: "./images/prueba_1.jpg",
        cid: "prueba_1",
      },
      {
        filename: "prueba_2.jpg",
        path: "./images/prueba_2.jpg",
        cid: "prueba_2",
      },
    ],
  });

  res.json({ result });
});

app.listen(3000, console.log("Server running on port 3000"));
