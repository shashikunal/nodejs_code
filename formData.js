const http = require("http");
const fs = require("fs");
const nodemailer = require("nodemailer");
const { parse } = require("querystring");

let server = http.createServer((req, res) => {
  req.headers["content-type"];
  if (req.method === "POST") {
    collectReqData(req, result => {
      console.log(result);
      res.end(`${result.email}`);
      let transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mywebclass63@gmail.com",
          pass: "sanjuvanju",
        },
      });
      let mailOption = {
        from: "mywebclass63@gmail.com",
        to: "shashikunal@gmail.com",
        subject: "mail testing",
        html: `<h1>welcome to to mani also join... ${result.email}</h1>`,
      };
      transport.sendMail(mailOption, err => {
        if (err) throw err;
        console.log("email sent");
      });
    });
  } else {
    //get method
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("login.html", "utf-8").pipe(res);
  }
});

let PORT = 5000;
server.listen(PORT, err => {
  if (err) throw err;
  console.log("server is running on port number " + PORT);
});

function collectReqData(request, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded"; //form post content type
  if (request.headers["content-type"] === FORM_URLENCODED) {
    //create data node event
    let body = "";
    request.on("data", chunk => {
      body += chunk.toString();
    });
    request.on("end", _ => {
      callback(parse(body.valueOf()));
    });
  } else {
    callback(null);
  }
}
