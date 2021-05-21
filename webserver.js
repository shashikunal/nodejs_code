// let http = require("http");
// let fs = require("fs");

// let server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   let readStream = fs.createReadStream("index.html", "utf-8");
//   readStream.pipe(res);
// });
// let port = 5000;
// server.listen(port, err => {
//   if (err) throw err;
//   console.log("server is running on port number " + port);
// });

// ?How to serve JSON data
//? create Static API

let http = require("http");

let server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json"); //FOR JSON
  res.statusCode = 200;
  let employees = [
    {
      emp_id: "typ1",
      emp_name: "mani",
      emp_salary: 30000,
      emp_designation: "Nodejs developer",
      emp_education: "BE",
      emp_gender: "Male",
    },
    {
      emp_id: "typ2",
      emp_name: "Syed",
      emp_salary: 400000,
      emp_designation: "MERN developer",
      emp_education: "BE",
      emp_gender: "Male",
    },
    {
      emp_id: "typ3",
      emp_name: "shashi",
      emp_salary: 1000,
      emp_designation: "HTML developer",
      emp_education: "BE",
      emp_gender: "Male",
    },
    {
      emp_id: "typ4",
      emp_name: "anu",
      emp_salary: 1000000,
      emp_designation: "Java developer",
      emp_education: "BE",
      emp_gender: "Female",
    },
    {
      emp_id: "typ5",
      emp_name: "vinay",
      emp_salary: 1000000,
      emp_designation: "python developer",
      emp_education: "BE",
      emp_gender: "male",
    },
  ];
  res.end(JSON.stringify(employees)); //json
});
let port = 5000;
server.listen(port, err => {
  if (err) throw err;
  console.log("Server is running on port number " + port);
});
