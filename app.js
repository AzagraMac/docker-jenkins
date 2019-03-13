var http = require('http');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<!DOCTYPE html>'+
'<html>'+
' <head>'+
' <meta charset="utf-8" />'+
' <title>Hello World</title>'+
' </head>'+ 
' <body>'+
' <p>Copyright 2019 <strong>AzagraMac</strong>!</p>'+
' </body>'+
'</html>');
	res.end();
});

server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");
