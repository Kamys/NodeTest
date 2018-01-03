const Server = require('./server');
console.log("App run");
let server = new Server();
server.run();
server.showAdmins();
server.showUser();