import { MidtransClient } from "midtrans-node-client";
import db, { serverTimestamp } from "../../lib/firebase";
import { sendEmail } from "../../lib/email";

export default async function handler(req, res) {
  const snap = new MidtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  //Calculate total amount
  const total = req.body.items.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);

  let orderId;

  //Generate the order in database
  await db
    .collection("Orders")
    .add({
      timestamp: serverTimestamp,
      items: req.body.items,
      client: req.body.client,
      status: "Wait payment",
    })
    .then((order) => {
      orderId = order.id;
    });

  sendEmail(
    req.body.client.email,
    "New Order - Tiendecita",
    `<p>Thank for your order: <a href="https://tiendita-rho.vercel.app/order?order_id=${orderId}">${orderId}<a/></p>`
  );

  //Generate Token Snap
  snap
    .createTransactionToken({
      transaction_details: {
        order_id: orderId,
        gross_amount: total,
      },
      item_details: req.body.items,
      customer_details: {
        first_name: req.body.client.firstName,
        last_name: req.body.client.lastName,
        email: req.body.client.email,
        phone: req.body.client.phone,
      },
    })
    .then((result) => res.status(200).send({ token: result }))
    .catch(console.error);
}
