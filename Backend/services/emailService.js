const nodeMailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
async function sendMail({ from, to, subject, text, html }) {
  const transporter = nodeMailer.createTransport(
    sendGridTransport({
      auth: {
        api_key:
          "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",
      },
    })
  );

  let info = await transporter.sendMail({
    from: `inShare <${from}>`,
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
  console.log(info);
}

module.exports = sendMail;
