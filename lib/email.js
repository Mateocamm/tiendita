const nodemailer = require("nodemailer");

export async function sendEmail(emailTo, subject, content) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: process.env.SENDER_EMAIL_HOST,
    port: process.env.SENDER_EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER_EMAIL_USER, // generated ethereal user
      pass: process.env.SENDER_EMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Tiendita" <tiendecita@locoporindonesia.com>', // sender address
    to: emailTo, // list of receivers
    subject: subject, // Subject line
    html: content, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}
