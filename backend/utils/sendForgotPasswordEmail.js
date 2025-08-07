import nodemailer from "nodemailer";

const sendForgotPasswordEmail = (token) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "velva.schmidt12@ethereal.email",
      pass: "eMe4D3P3vDmD5mJMv2",
    },
  });

  const resetLink = `http://localhost:5173/reset-password?token=${token}`;

  const mailOptions = {
    from: "velva.schmidt12@ethereal.email",
    to: "velva.schmidt12@ethereal.email",
    subject: "Sending Email using Node.js",
    html: `<a href="${resetLink}">Нажми сюда, чтобы сбросить пароль</a>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      // Error handling
    }
  });
};

export default sendForgotPasswordEmail;
