const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'bilal.ahmad@focusteck.com',
    pass: 'qoza njfi dtts ermq'
  }
});

async function sendEmail(to, subject, text) {
  try {
    const mailOptions = {
      from: 'bilal.ahmad@focusteck.com',
      to: to,
      subject: subject,
      text: text
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("infoooooooooooooooooooooooooooo: ", info);
    console.log('Email sent:', info.messageId);
    console.log('Email sent:', mailOptions.to);
    return info.messageId;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = { sendEmail };
