import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Use your TEST secret key
const stripe = new Stripe("sk_test_12345_YOUR_SECRET_KEY");

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Test Product" },
            unit_amount: 5000, // $50.00
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    // return as sessionId
    res.json({ sessionId: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(4242, () => console.log("Server running on port 4242"));
