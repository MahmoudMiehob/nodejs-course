var alr = require('crypto');

var myal=alr.createHash("sha1");

myal.update("hello world");

console.log(myal.digest('hex'))