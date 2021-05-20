//!HTTP Hypertext transfer protocol
//?Client and server communication
//?server to server communication

/**
 * HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.
 */

// http.METHODS.forEach(method => {
//   console.log(method);
// });
// HTTP Methods
//!----iMPORTANT HTTP METHODS =====
// ?GET =>FETCH DATA OR READ/GET DATA
// ?POST =>CREATE DATA
// ?PUT =>UPDATE OR MODIFY
// ?DELETE =>DELETE DATA
// ?PATCH => NOT ALL DATA ONLY SOME PORTION  DATA SHOULD BE MODIFIED

//!===============================
// !CRUD OPERATION C=>CREATE => HTTP POST METHOD NEW DATA
//!R => READ => HTTP GET METHOD FOR FETCHING DATA
//!U => UPDATE => HTTP PUT/PATCH FOR MODIFY OLD DATA
//!D => DELETE => HTTP DELETE METHOD

// OPTION
// HEAD

// HTTP STATUS CODE'S
//!iNTERVIEW QUESTION
//? => INFORMATIONAL RESPONSE (100 , 199)
//? => SUCCESSFUL RESPONSE (200 , 299) //CREATE
//? => REDIRECT RESPONSE (300 , 399) //REGISTER PAGE INTO LOGIN
//? => CLIENT ERRORS (400 , 499) //PAGE NOT FOUND
//? => SERVER ERRORS (500 , 599) //SEVER BUSY

// console.log(http.STATUS_CODES);
//!============================SUCCESSFUL RESPONSE=======================
// ?200 OK
//! the request has successfully fetching
//?GET
//?201  CREATED
//?THE REQUEST HAS SUCCESS AND NEW OR OLD RESOURCE HAS BEEN CREATED
//! POST , PUT

//!============================REDIRECT RESPONSE=======================
//? 300 MULTIPLE CHOICE
//?=> REQUEST HAS MORE THAN ONE POSSIBLE RESPONSE
//? 301 MOVED PERMANENTLY
//? REQUEST HAS BEEN MOVED /CHANGED PERMANENTLY

//!============================CLIENT RESPONSE=======================
//?400 BAD REQUEST
//? => SERVER IS NOT UNDERSTANDING REQUEST DUE TO BAD SYNTAX

//? 401 UNAUTHORIZED
//?=> HTTP STANDARD UNAUTHORIZED RESPONSE

//?402 //? => PAYMENT REQUIRED
//?402 Payment Required. This response code is reserved for future use.
//?403 forbidden
//?client error status response code indicates that the server understood the request but refuses to authorize it
//!404
//! page not found or file not found

//!===================SERVER RESPONSE ==========================
//?500 Internal server error
//?501 not implemented
//?502  bad gateway
//?503 service unavailable
//?504 gateway timeout
//? 505 http version not supported

//!----how to create own web server ==============================

// let server = http.createServer((req , res) => {
//     //? set headers
//     res.setHeader("content-type", 'text/html');
//     //? set status code
//     res.statusCode = 200;
//     //? set body
//     res.write('<h1>Welcome to Nodejs Class</h1>');
//     res.end();
// });

// let server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/html" });
//   res.end("<h1>Welcome to MERN stack</h1>");
// });

//!=============how to serve html pages===========================

// const { createServer } = require("http");
// const fs = require("fs");
// createServer((req, res) => {
//   fs.readFile("index.html", { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end(); //!ending server response its ****important
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     }
//   });
// }).listen(5000, err => {
//   if (err) throw err;
//   console.log("Server is running on port number 5000");
// });
