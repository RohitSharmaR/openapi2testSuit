
var tests =[]
module.exports.goodTests = function(obj){
    //var tests =[];
    var test = {}
    for (i=0; i< obj.parameters.length; i++){
        var name =  obj.parameters[i].name;
        var required = obj.parameters[i].required;
        var location = obj.parameters[i].in;
        test[name]= "xxx";
        // Build only mandatory tests
        if(required == true){
            buildMandatoryTests(name);
        }
        console.log(test);
    } 
    tests.push(test);

    return tests;
}


function buildMandatoryTests(param){
    var test = {}
   test[param] = "YYY";
   tests.push(test);
   
}