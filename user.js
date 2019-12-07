const request = require("request");
const yargs = require("yargs").argv;
// const weather = require("./weather");
const fs = require("fs");

user = (id, callback) => {
  let url = `https://jsonplaceholder.typicode.com/users/${id}`;
  request(url, (err, resp, body) => {
    if (err) {
      console.log("Brak dostępu do internetu");
    }
    if (resp.statusCode === 200) {
      let main = JSON.parse(body);
      console.log(
        `Name is the: ${main.name}, lattitude ${main.address.geo.lat} and length ${main.address.geo.lng} my young padawan.`
      );
      callback(main);
      // ZADANIE 9
      // fs.writeFile("userTemp.txt", main.name, "utf-8", () => {
      //   console.log("done");
      // });
    } else {
      console.log("User not found");
    }
  });
};

module.exports.user = user;
