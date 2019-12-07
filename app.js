// ZADANIE 1

// const fs = require("fs");

// const user = {
//   name: "Jan",
//   lastName: "Nowak"
// };

// fs.writeFile("user.json", JSON.stringify(user), () => {
//   console.log("done");
// });

// ZADANIE 2

// const fs = require("fs");
// const yargs = require("yargs").argv;

// const user = {
//   name: yargs.name,
//   lastName: yargs.lastName
// };

// fs.writeFile("user.json", JSON.stringify(user), () => {
//   console.log("done");
// });

// ZADANIE 3

// const fs = require("fs");
// const yargs = require("yargs").argv;

// const user = {
//   name: yargs.name,
//   lastName: yargs.lastName
// };

// fs.readFile("user.json", "utf-8", (err, data) => {
//   let name = JSON.parse(data);
//   console.log(name.name);
//   fs.writeFile("user.json", JSON.stringify(user), () => {
//     console.log("done");
//   });
// });

// ZADANIE 4 (rozszerzone o 6)

// const request = require("request");
// const yargs = require("yargs").argv;
// let id = yargs.id;
// let url = `https://jsonplaceholder.typicode.com/users/${id}`;

// request(url, (err, resp, body) => {
//   let main = JSON.parse(body);
//   console.log(main.name, main.address.geo.lat, main.address.geo.lng);
// });

// ZADANIE 5 (rozszerzone o 6)

// const request = require("request");
// const yargs = require("yargs").argv;
// let id = yargs.id;
// let url = `https://jsonplaceholder.typicode.com/users/${id}`;

// request(url, (err, resp, body) => {
//   if (err) {
//     console.log("Brak dostępu do internetu");
//   }
//   if (resp.statusCode === 200) {
//     let main = JSON.parse(body);
//     console.log(main.name, main.address.geo.lat, main.address.geo.lng);
//   } else {
//     console.log("User not found");
//   }
// });

// ZADANIE 7

// const request = require("request");
// const yargs = require("yargs").argv;
// let id = yargs.id;
// let url = `https://jsonplaceholder.typicode.com/users/${id}`;

// request(url, (err, resp, body) => {
//   if (err) {
//     console.log("Brak dostępu do internetu");
//   }
//   if (resp.statusCode === 200) {
//     let main = JSON.parse(body);
//     console.log(main.name, main.address.geo.lat, main.address.geo.lng);
//     let lat = main.address.geo.lat;
//     let lng = main.address.geo.lng;
//     request(
//       `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`,
//       (error, response, body2) => {
//         if (error) {
//           console.log("Brak dostępu do internetu");
//         }
//         if (response.statusCode === 200) {
//           let main2 = JSON.parse(body2);
//           console.log(main2.weather);
//         } else console.log("Brak pogody");
//       }
//     );
//   } else {
//     console.log("User not found");
//   }
// });

// ZADANIE 8

const request = require("request");
const yargs = require("yargs").argv;
// let id = yargs.id;
let user = require("./user");
let weather = require("./weather");
// const fs = require("fs");

user.user(yargs.id, user => {
  weather.weather(user.address.geo.lat, user.address.geo.lng);
});
