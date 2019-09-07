var requestBody = require("./generateRequest.js");
//var tests =[]
module.exports.goodTests = function(obj, swag) {
  var tests = [];
  var test = {};
  var request = requestBody.generateRequest(swag, obj.requestBody);
  // This piece injects parameters to each tests
  for (i = 0; i < obj.parameters.length; i++) {
    var name = obj.parameters[i].name;
    var required = obj.parameters[i].required;
    var location = obj.parameters[i].in;
    test[name] = String("XXXX");
    // Build only mandatory tests
    if (required == true) {
      var mandtoryRequest = requestBody.generateRequest(
        swag,
        obj.requestBody,
        true
      );
      var mandatoryTest = buildMandatoryTests(name);
      mandatoryTest["body"] = mandtoryRequest;
    }
    //  console.log(swag);
  }
  test["body"] = request;
  tests.push(test);
  tests.push(mandatoryTest);

  return tests;
};

function buildMandatoryTests(param) {
  var test = {};
  test[param] = "YYYY";
  return test;
}
