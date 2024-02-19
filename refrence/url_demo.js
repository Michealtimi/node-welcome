const url = require ('url');

const myurl = new URL('http://mywebsite.com/hello.html?id=1006status=active');

//seriaalized URL
console.log(myurl.href);
console.log(myurl.toString());

//HOST

