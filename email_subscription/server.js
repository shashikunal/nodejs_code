let http = require("http"); //core module
let fs = require("fs"); //core module
const { parse } = require("querystring"); //core module
let nodemailer = require("nodemailer"); //third party module

let server = http.createServer((req, res) => {
  if (req.method === "POST") {
    //content -type
    let FORM_URLENCODED = "application/x-www-form-urlencoded";
    if (req.headers["content-type"] === FORM_URLENCODED) {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString();
      });

      req.on("end", _ => {
        let email = parse(body.valueOf()).email;
        res.end(
          parse(body.valueOf()).email + " " + `Thank you for subscription`
        );
        //?Node mailer block
        let transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "mywebclass63@gmail.com",
            pass: "sanjuvanju",
          },
        });

        let mailOption = {
          from: "mywebclass63@gmail.com",
          to: `${email} , shashikunal@gmail.com`,
          subject: "Mail Subscription Testing",
          html: ` <h2>Welcome to Jspiders</h2>
            <p>JSpiders is the world's ace Java development training organization with an aim to bridge the gap between the demands of the industry and the curriculum of ...</p>
            <button>JOIN Course</button>
          `,
        };

        transport.sendMail(mailOption, err => {
          if (err) throw err;
          console.log("successfully mail sent ");
        });

        //?end node mailer block
      });
    } else {
      res.end(null);
    }
  } else {
    fs.createReadStream("index.html", { encoding: "utf-8" }).pipe(res);
  }
});

let PORT = 5000;
server.listen(PORT, err => {
  if (err) throw err;
  console.log("server is running on port number " + PORT);
});
