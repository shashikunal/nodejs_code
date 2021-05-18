//load or import fs module
let fs = require("fs");
// let fs = require("fs/promises");

// synchronous way //!blocking code
//todo read file
// let readme = fs.readFileSync("readme.txt" , 'utf-8');
// console.log(readme); //raw data buffer
//convert raw buffer into string

//?Asynchronous way
//todo read file Asynchronously **callback or promise
//?callback or //Promise  //non blocking code
//!should call callback function or promises for Asynchronous data

// fs.readFile("readme.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("i am executing before callback");

//? write file synchronously
//writing file
// let javascript = fs.readFileSync("javascript.js", { encoding: "utf-8" });
// let writeMe = fs.writeFileSync("ecma.js" , javascript);
// console.log(writeMe);

//? write file Asynchronously ~!recommended
//simple way writing data async
// fs.writeFile('nodejs.txt', 'nodejs is a backend platform by using javascript', (err) => {
//     if (err) throw err;
//     console.log('successfully nodejs.txt file created and written some data')
// } ) //!path , data , callback

//? read file asynchronously
// fs.readFile("readme.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) throw err;
//   console.log(
//     "successfully read that data next will write exact same data => call"
//   );
//   //!write file Async
//   fs.writeFile("shashi.txt", data, err => {
//     if (err) throw err;
//     console.log("successfully written data from readme.txt file");
//   }); //? path , data , callback
// }); //path , encoding , callback

//!how to create directory
//? create folder synchronously
// fs.mkdirSync("Jspiders");
//? create folder Asynchronously
//!callback function
//!recommended
// fs.mkdir("Qspiders", err => {
//   if (err) throw err;
//   console.log("Successfully Directory Created...");
// });

//!Make directory and write file inside directory asynchronously
// fs.mkdir("WebSpiders", err => {
//   if (err) throw err;
//   console.log("Successfully WebSpiders folder Cleated");
//   // read file asynchronously
//   fs.readFile("readme.txt", { encoding: "utf-8" }, (err, data) => {
//     if (err) throw err;
//     fs.writeFile("WebSpiders/writeMe.txt", data, err => {
//       if (err) throw err;
//       console.log("successFully data written inside webSpider Folder");
//     }); //path , data , callback
//     //write file async
//   }); //path , encoding , callback
// }); //path and callback

//?nested directory
// fs.mkdir('src', (err) => {
//   if (err) throw err;
//   console.log('successfully src folder created');
//   fs.mkdir('src/components', (err) => {
//     if (err) throw err;
//     console.log('components folder created inside src folder');
//     fs.writeFile('src/components/header.jsx', 'import React from react', (err) => {
//       if (err) throw err;
//       console.log('successfully header.jsx created')
//     })
//   })
// })

//? delete file and folder synchronously
// fs.unlinkSync('nodejs.txt');

//? delete file and folder Asynchronously
// fs.unlink("shashi.txt", err => {
//   if (err) throw err;
//   console.log("successfully file deleted!");
// });

// fs.unlinkSync('WebSpiders/writeMe.txt');//delete file
// fs.rmdirSync('WebSpiders'); //folder is not empty first delete file then remove folder

//!delete !header.jsx then remove !components folder then remove !src
// fs.unlink("src/components/header.jsx", (err) => {
//     if (err) throw err;
//     console.log('deleted header.jsx successfully');

//     //!delete components folder
//     fs.rmdir('src/components', (err) => {
//         if (err) throw err;
//         console.log('Components folder deleted successfully');

//         //!delete src folder now
//         fs.rmdir('src', (err) => {
//             if (err) throw err;
//             console.log('finally deleted src folder')
//         })
//     })
// })

//!rename file and directory synchronously
//fs.renameSync('readme.txt', 'jspiders.txt'); //old path  , new path

//!rename file and directory Asynchronously
// fs.rename("jspiders.txt", "Qspiders.txt", err => {
//   if (err) throw err;
//   console.log("successfully file renamed");
// }); //old path , new path , callback

//Promise Based file access
// (async () => {
//   try {
//     await fs.rename("Qspiders.txt", "Jspiders.txt");
//     console.log("Successfully file renamed by using Promises");
//   } catch (err) {
//     console.log(err);
//   }
// })();

// fs.rename("Jspiders.txt", 'Qspiders.txt').then(_ => {
//     console.log('successfully file renamed')
// }).catch(err => console.log(err));

// fs.rename("index.html", "index.js", err => {
//   if (err) throw err;
//   console.log("Folder renamed");
// });

// fs.writeFile("Qspiders.txt", "", err => {
//   if (err) throw err;
//   console.log("successfully deleted content");
// });

//!Append file  and synchronously
// fs.appendFileSync('Qspiders.txt', 'Shashikunal');

// //!Append file  and Asynchronously
// fs.appendFile("Qspiders.txt", "Shashi", err => {
//   if (err) throw err;
//   console.log("Successfully data appended into content");
// });

//!change permission to file
// fs.chmod("index.js", 0o666, err => {
//   if (err) throw err;
//   console.log("successfully file mode changed");
// });

//!copy file
// fs.copyFile("Qspiders.txt", "Qspiders/Salman.txt", err => {
//   if (err) throw err;
//   console.log("successfully file copied");
// }); //src , destination folder

fs.stat("Qspiders.txt", (err, status) => {
  if (err) throw err;
  console.log(status);
});
