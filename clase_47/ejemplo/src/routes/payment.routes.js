import { Router } from "express";
import PaymentService from "../services/payment.js";

const router = Router();

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

const user = {
  email: "mail@gmail.com",
  age: 23,
};

router.post("/payment-intents", async (req, res) => {
  const productRequired = products.find(
    (product) => product.id === Number(req.query.id)
  );

  if (!productRequired) {
    return res.status(404).json({ message: "Product not found" });
  }

  // console.log(productRequired);
  // const paymentInfo = {
  //   amount: productRequired.price,
  //   currency: "usd",
  // };

  const paymentInfo = {
    amount: productRequired.price,
    currency: "usd",
    metadata: {
      id: "userId",
      address: JSON.stringify(
        {
          street: "123 Main Street",
          city: "San Francisco",
          state: "CA",
        },
        null,
        "\t"
      ),
      phoneNumber: "+15555555555",
      email: user.email,
      age: user.age,
    },
  };

  const paymentService = new PaymentService();

  const result = await paymentService.createPaymentIntent(paymentInfo);

  res.send({ status: "Success", payload: result });
});

export default router;
