const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'morrm046@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'morrm046@gmail.com',
    subject: 'Sorry to see you go',
    text: `Sad to see you go ${name}, Can you let me know why you left?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
