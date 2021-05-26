let http = require("http");
let fs = require("fs");
let mongodb = require("mongodb").MongoClient;
let { parse } = require("querystring");

let localDatabase = "mongodb://localhost:27017/";

let server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let URL_ENCODED = "application/x-www-form-urlencoded";
    if (req.headers["content-type"] === URL_ENCODED) {
      let body = "";
      //node event
      req.on("data", chunk => {
        body += chunk.toString();
      });
      req.on("end", _ => {
        let studentData = parse(body);
        //connect mongodb and insert whatever getting from form
        mongodb.connect(
          localDatabase,
          { useNewUrlParser: true, useUnifiedTopology: true },
          (err, database) => {
            if (err) throw err;
            //create database name
            let db = database.db("students");
            //create collection and store data
            db.collection("student_list", (err, studentInfo) => {
              if (err) throw err;
              //insert form data
              studentInfo.insertMany([studentData], err => {
                if (err) throw err;
                console.log("successfully student data stored in our database");
              });
            });
          }
        );
      });
      res.end("successfully data stored");
    } else {
      res.end(null);
    }
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("index.html", { encoding: "utf-8" }).pipe(res);
  }
});

server.listen(4000, err => {
  if (err) throw err;
  console.log("Server is connected ");
});
