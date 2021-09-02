//var mysql = require('mysql');
const path = require('path');
const url = require('url');
const net = require('net');
const express = require('express');
const bodyParser = require('body-parser');
const routeAccount = require('./routers/account.route');
const routeRoom = require('./routers/room.route');
const mongoose = require('mongoose');


//mongodb connection
let dev_db_url = 'mongodb+srv://wcai49:wcai666666@cluster0.czrr1.mongodb.net/Team_Ti?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//app.use('/api', route);
app.use('/room', routeRoom)
app.use('/account', routeAccount);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8081, function () {
    console.log('Server running at 8081 port');
})



//old version codes

/*SQL sentences:
var getAccount = 'SELECT * FROM TI_ACCOUNTS';
*/


/*mysql connection
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'ti_accounts'
});
connection.connect();

connection.query(getAccount, function(err, result){
    if(err)
        console.log('GET err: ' + err.message);
    accountArray = JSON.stringify(result);
});

app.get('/', function(req, res){
    console.log('Get!');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(accountArray);
});


//Registration requests for creating a new account from Unity
app.post('/registration', function(req, res){
    let regisInfo = false;
    res.setHeader("Access-Control-Allow-Origin", "*");
    var params = req.body;
    var postsql = "INSERT INTO TI_Accounts (TI_Accounts, Role, password) " +
        "VALUES ('" + (params.TI_Accounts).toString() + "', 'Guest', '" + (params.password).toString() + "')";
    console.log('post sql:' + postsql);
    connection.query(postsql, function(err){
        if(err)
        {
            console.log('Register Error: '+ err);
            regisInfo = false;
        }
        else
            regisInfo = true;

        res.send(regisInfo)
    })
});


//Login requests receiving from the Unity
app.post('/login', function(req, res){
    let verified = false;
    res.setHeader("Access-Control-Allow-Origin", "*");
    var params = req.body;
    var verifysql = "SELECT EXISTS ( SELECT * FROM TI_Accounts WHERE TI_Accounts = '" + (params.TI_Accounts).toString() + "' AND password = '" + (params.password).toString() + "')";
    console.log('verify sql:' + verifysql);
    connection.query(verifysql, function(err, rows){
        if(err)
            console.log('Post Error: '+ err);

        var result = (rows[0]);

        if( result[Object.keys(result)[0]] == 1){
            console.log('1');
            verified = true;
        }
        else
            verified = false;
        res.send(verified);
        console.log(verified);
    });

});
*/


/*let server = net.createServer();
server.listen(3000,'127.0.0.1');

server.on('listening', function(sock){
    console.log('Server is listening to be connected');
})


server.on('connection', (res, socket, head) => {
    console.log('Connected');
    connection.query(getAccount, function (err, result) {
        //如果发生错误, 将错误显示在console中
        if (err)
            console.log('SELECT ERROR: ' + err);
        //如果没有错误, 将MySQL返回的result转化成 web应用传输的JSON格式, 并储存于str中.
        accountArray = JSON.stringify(result);
        console.log('The account info: ' + accountArray);
    });
});*/





//connection with the MySQL database.
/*
function mydb() {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'ti_accounts'
    });

    //Connecting to the MySQL database;
    connection.connect();
    connection.query(getAccount, function(err, result){
        if(err){
            console.log('Error happens: ' + err);
        }
        accountArray = JSON.stringify(result);
        console.log('The account info: ' + accountArray);
    });

    return connection;
}

//server codes:
http.createServer(function(request, response){
    var urlpre = url.parse(request.url).pathname;
    var resData = '';
    console.log(urlpre);

    if(urlpre === '/public'){
        serverStatic.s(request, response);
    }

    if(urlpre === '/reg') {
        request.on('data', function (data) {
            resData += data;
        });


        request.on('end', function () {
            var connect = mydb();
            var obj = qs.parse(resData);
            var post = {TI_Accounts: obj.TI_Accounts, password: obj.password};
            connect.query("INSERT INTO TI_ACCOUNTS SET?", post, function (err, result) {
                response.write("Registration success");
            });

        });
    }

    if(urlpre === '/login') {
        request.on('data', function(data){
            resData += data;
        });

        request.on('end', function(){
            var connect = mydb();
            var obj = qs.parse(resData);

            var post = {TI_Accounts: obj.TI_Accounts, password: obj.password};
            var sql = connection.query('SELECT * FROM TI_ACCOUNTS WHERE TI_Accounts = ?', obj.TI_Accounts, function(err, row, result){
                console.log(row[0]);
                if(row[0] === undefined){
                    console.log('Login failed');
                    response.end('1');
                }
                else{
                    console.log('Login success');
                    response.end('2');
                }
            });
        });
    }
}).listen(3000, '127.0.0.1');

*/

