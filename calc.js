var assert = require('assert');

function mul(a,b){
    return a*b ;
}


function add(a,b){
    return a+b ;
}


function sum(a,b){
    return a-b ;
}

//start unit testing

r = mul (2,3);
assert(r==5,"error")