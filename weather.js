// let user = require("./user");
const request = require("request");
const fs = require("fs");

weather = (lat, lng) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log("Brak dostępu do internetu");
    }
    if (response.statusCode === 200) {
      let main = JSON.parse(body);
      console.log(main.weather);
      //ZADANIE 9
      // fs.appendFile("userTemp.txt", ` ${main.main.temp}`, "utf-8", () => {
      //   console.log("done")})
    } else console.log("Brak pogody");
  });
};

module.exports.weather = weather;
