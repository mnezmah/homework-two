const superagent = require("superagent")

function getTatooineResidents() {
  return superagent
    .get('https://swapi.co/api/planets/1/')
    .then(res => res.body.residents)
    .catch(error => console.log(error))
}

function promiseMeAString(string) {
  return new Promise((res, reject) => {
    if (string) res("You kept the Promise!")
    reject("You have failed me!")
  })
}

module.exports = {
  getTatooineResidents,
  promiseMeAString
}