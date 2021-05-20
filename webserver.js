let { createServer } = require("http");
let { readFile } = require("fs");

createServer((req, res) => {
  readFile("index.html", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      //end server
      res.end();
    } else {
      //   res.end(data);
      res.write(data);
      res.end();
    }
  });
}).listen(5000, err => {
  if (err) throw err;
  console.log("server is running on port number 5000");
});
