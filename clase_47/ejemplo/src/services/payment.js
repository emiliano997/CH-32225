import Stripe from "stripe";

export default class PaymentService {
  constructor() {
    this.stripe = new Stripe();
  }

  createPaymentIntent = async (data) => {
    const paymentIntent = await this.stripe.paymentIntents.create(data);
    return paymentIntent;
  };
}
