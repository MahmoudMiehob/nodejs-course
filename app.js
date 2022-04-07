console.log('hello')


var personal={
    firstname : "mahmoud",
    lastname : "miehob",
    age :"22"
}

newpersonal = personal;
newpersonal.firstname = "ali";

function display(){
console.log(personal.firstname + " " + personal.lastname + " " + personal.age );
setTimeout(displayage,3000)
}

function displayage (){
    console.log(personal.age)
}

display()


// ##########################################
var st = require("./student");

st.studentname


// ##########################################


var fs = require("fs");

fs.readFile("info.txt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
})


// ##########################################


var http = require("http");
var url = require("url");


var myhttp = http.createServer(function(request,response){
    var querystring = url.parse(request.url,true).query;
    console.log(querystring);

    response.writeHead(200);
    response.write("welcome");
    response.end();
});

myhttp.listen(8888);

console.log('hello');