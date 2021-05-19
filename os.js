let os = require("os");
//os architecture
//?it returns operating system CPU architecture
// console.log(os.arch());
// if (os.arch() === "x64") {
//   console.log(`my computer can support ${os.arch()}`);
// } else if (os.arch() === "x86") {
//   console.log(`my computer is supporting ${os.arch()}`);
// } else {
//   console.log(
//     `your computer is not supporting....please use other alternative`
//   );
// }
// console.log(os.cpus());
//?it contains information about each logical CPU core
//? it returns array Objects

// Platform
// console.log(os.platform());
//! it returns identify the operating system platform

// if (os.platform() === "win32") {
//   console.log("please download Vs code for windows");
// } else if (os.platform() === "darwin") {
//   console.log("please download vs code for mac system");
// } else if (os.platform() === "android") {
//   console.log("please download vs code from google play store");
// } else if (os.platform() === "linux") {
//   console.log("please download vscode for ubuntu linux or fedora linux ");
// } else {
//   console.log(
//     "your operating system is not supporting vs code please do alternative "
//   );
// }

// os.release()
// console.log(os.release());

//!os.totalmem()
// console.log(os.totalmem());
// let totalMemory = `${Math.round((os.totalmem() / 1024 / 1024) * 100)} MB`;
// console.log(totalMemory);

// console.log(os.freemem());
// let freeMemory = `${Math.round(((os.freemem() / 1024 / 1024) * 100) / 100)} MB`;
// console.log(freeMemory);

//!os.type()
// console.log(os.type());
// console.log(os.userInfo());
//! information about users
// console.log(os.version());

// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
console.log(os.endianness());
//?Endianness refers to the order of bits in a sequence within a binary representation of a number. The os. endianness() method is an inbuilt application programming interface of the os module which is used to get endianness of the CPU of the computer for which the node. js is compiled
