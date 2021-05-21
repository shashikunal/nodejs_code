let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  let path = "views/";
  switch (req.url) {
    case "/":
      path += "home.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/login":
      path += "login.html";
      break;
    case "/register":
      path += "register.html";
      break;
    case "/contact":
      path += "contact.html";
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.createReadStream(path, "utf-8").pipe(res);
});
let PORT = 5000;
server.listen(PORT, err => {
  if (err) throw err;
  console.log(`Local server is running on ${PORT}`);
});
