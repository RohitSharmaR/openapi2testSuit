var jsf = require('json-schema-faker');
module.exports.generateRequest = function(swag,requestBody,Mandatory){
  var request ={}
  var _cType = 'application/json';
  var ref = '$ref';
  var content = requestBody.content
  var schemaType = content[_cType];
  var schemaLocation = schemaType.schema[ref].split('/');
  var schemaName = schemaLocation[3];
  var schema = swag.components.schemas[schemaName];
  
  if (Mandatory == undefined)
    {

      request = schema.example;
    }
  else{
      request = buildMandatoryRequest(schema,schema.example);
  }

    return request;

}
function buildMandatoryRequest(schema, example){

//console.log(jsf.generate(sch,""));
  var json = jsf.generate(generateJson(schema.properties, schema.required), "");
  return json;
}
function generateJson(props,mandtory){

  Object.keys(props).forEach(function(prop){

  var requiredElement = mandtory.indexOf(prop);
  //console.log(requiredElement);
    if (requiredElement == -1){
      delete props[prop];
    }
   else if ((props[prop].type) == "object" && (props[prop].required)== undefined){
     generateJson(props[prop].properties,props[prop].required);
   }
  })
return props;
}
