// ZADANIE 3

// const fs = require("fs");
// const yargs = require("yargs").argv;

// let name = yargs.name;
// let lastName = yargs.lastName;

// const user = {
//   name: name,
//   lastName: lastName
// };

// fs.readFile("json.json", (error, data) => {
//   let parsed = JSON.parse(data);
//   console.log(parsed.name);
//   fs.writeFile("json.json", JSON.stringify(user), () => {
//     console.log("okej");
//   });
// });

// ZADANIE 4

// const request = require("request");
// const yargs = require("yargs").argv;
// let id = yargs.id;
// const url = `https://jsonplaceholder.typicode.com/users/${id}`;

// request(url, (err, resp, body) => {
//   if (resp.statusCode === 200) {
//     let data = JSON.parse(body);
//     console.log(data.name, data.address.geo.lat, data.address.geo.lng);
//   } else if (err) {
//     console.log("brak neta");
//   } else {
//     console.log("User not found");
//   }
// });

// ZADANIE 7

const request = require("request");
const yargs = require("yargs").argv;
let id = yargs.id;
let lat;
let lng;
const url = `https://jsonplaceholder.typicode.com/users/${id}`;

request(url, (err, resp, body) => {
  if (resp.statusCode === 200) {
    let data = JSON.parse(body);
    console.log(data.name, data.address.geo.lat, data.address.geo.lng);
    let lat = data.address.geo.lat;
    let lng = data.address.geo.lng;
    request(
      `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`,
      (error, response, body2) => {
        if (response.statusCode === 200) {
          let data2 = JSON.parse(body2);
          console.log(data2.weather);
        } else if (error) {
          console.log("Error");
        } else {
          console.log("Brak danych o pogodzie");
        }
      }
    );
  } else if (err) {
    console.log("brak neta");
  } else {
    console.log("User not found");
  }
});
