// import nodemailer from node_modules
const nodemailer = require("nodemailer");
//sending emails from nodejs app

const transport = nodemailer.createTransport({
  service: "gmail", //?mail provider
  auth: {
    user: "mywebclass63@gmail.com",
    pass: "sanjuvanju",
  },
});

//?Mail Options
let mailOptions = {
  from: "fullstackbtm@gmail.com",
  to: "shashikunal@gmail.com",
  subject: "Testing mail service from nodejs",
  html: `<h1 style="color:red">Welcome to Jspiders</h1>
    <p>JSpiders is the world's ace Java development training organization with an aim to bridge the gap between the demands of the industry and the curriculum of ...</p>
    <button>contact us</button>
    `,
};

// sendEMail
transport.sendMail(mailOptions, err => {
  if (err) throw err;
  console.log("successfully mail sent");
});
