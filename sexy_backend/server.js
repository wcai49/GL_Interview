var fs  = require('fs');

//var mime =require('mime');

var cache = {};



function send404(response){

    response.writeHead(404, {'Content-Type':'text/plain'});

    response.write('Error 404: resource notfound.');

    response.end();

}



function sendFile(response, filePath, fileContents){

    response.writeHead(

        200,

        //{"content-type":mime.lookup(path.basename(filePath))}

        {"content-type": 'text/html'}

    );

    response.end(fileContents);

}



function serveStatic(request,response){



    var filePath=false;

    if(request.url=='public/'){

        filePath='public/index.html';

    } else{

        filePath=request.url;

    }

    var absPath='.'+filePath;



    if (cache[absPath]) {

        sendFile(response, absPath,cache[absPath]);

    } else {

        fs.exists(absPath, function(exists) {

            if (exists) {

                fs.readFile(absPath, function(err,data) {

                    if (err) {

                        send404(response);

                    } else {

                        cache[absPath] = data;

                        sendFile(response, absPath, data);

                    }

                });

            } else {

                send404(response);

            }

        });

    }

}

exports.s=serveStatic;

exports.send404=send404;
