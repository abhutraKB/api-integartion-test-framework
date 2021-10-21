var supertest = require('supertest'); //require supertest
const request = supertest('https://reqres.in/'); //supertest hits the HTTP server

module.exports = {
  request
};
