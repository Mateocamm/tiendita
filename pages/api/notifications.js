import { MidtransClient } from "midtrans-node-client";
import db, { serverTimestamp } from "../../lib/firebase";

export default async function handler(req, res) {
  await db.collection("orderLog").add({
    data: req.body,
  });

  const apiClient = new MidtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  apiClient.transaction.notification(req.body).then((statusResponse) => {
    let orderId = statusResponse.order_id;
    let transactionStatus = statusResponse.transaction_status;
    let fraudStatus = statusResponse.fraud_status;
    let statusToUpdate;

    console.log(
      `Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`
    );

    // Sample transactionStatus handling logic

    if (transactionStatus == "capture") {
      if (fraudStatus == "challenge") {
        // TODO set transaction status on your database to 'challenge'
        // and response with 200 OK
      } else if (fraudStatus == "accept") {
        // TODO set transaction status on your database to 'success'
        // and response with 200 OK
        statusToUpdate="success";
      }
    } else if (transactionStatus == "settlement") {
      // TODO set transaction status on your database to 'success'
      statusToUpdate="success";
      // and response with 200 OK
    } else if (
      transactionStatus == "cancel" ||
      transactionStatus == "deny" ||
      transactionStatus == "expire"
    ) {
      // TODO set transaction status on your database to 'failure'
      statusToUpdate="failure";
      // and response with 200 OK
    } else if (transactionStatus == "pending") {
      // TODO set transaction status on your database to 'pending' / waiting payment
      statusToUpdate="pending";
      // and response with 200 OK
    }

    db.collection("Orders")
    .doc(orderId)
    .set(
      {
        status: statusToUpdate,
        paymentType: statusResponse.payment_type,
        transactionTime: statusResponse.transaction_time
      },
      { merge: true }
    );

    res.status(200).json({ orderId: orderId })

  });
}
