const jsonfile = require("jsonfile");
var params = require("./2xx.js");
const file = "./openapi.json";
var testSuit = {};
var statuscode = {};
var _method = {};
jsonfile
  .readFile(file)
  .then(obj => {
    //console.dir(Object.keys(obj.paths))
    Object.keys(obj.paths).forEach(function(path) {
      //console.log(key, obj.paths[key]);
      testSuit[path] = {};

      Object.keys(obj.paths[path]).forEach(function(method) {
        // testSuit[path][method] = {};
        var responses = "responses";

        Object.keys(obj.paths[path][method][responses]).forEach(function(
          status
        ) {
          if (status.includes("20")) {
            statuscode[status] = params.goodTests(obj.paths[path][method], obj);
          }
          // statuscode[status] = [];
        });
        _method[method] = statuscode;
      });
      testSuit[path] = _method;
    });
    console.log(JSON.stringify(testSuit));
  })
  .catch(error => console.error(error));
