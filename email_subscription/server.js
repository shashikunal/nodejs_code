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
        res.end(parse(body.valueOf()).email);
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
