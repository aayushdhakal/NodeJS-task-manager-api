const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name)=>{
   sgMail.send({//this return promise
      to:email,
      from:'aayushdhakal96@gen.io',
      subject:'Thanks for joining in !',
      text:`Welcome to the app, ${name}. Let me know how you get along with the app.`
      // html can be used to send html
   });
}
const sendCancelationEmail = (email,name)=>{
   sgMail.send({
      to:email,
      from:'aayushdhakal96@gen.io',
      subject:'Sorry to see you go',
      text:`Goodbye , ${name}. Hope to see you back soon`
   })
}

module .exports = {
   sendWelcomeEmail,
   sendCancelationEmail
}