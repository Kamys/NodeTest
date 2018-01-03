const Server = require('./server');
let Logger = require('./help/logger')(module);
Logger.info("App run");
let server = new Server();
server.run();
server.showAdmins();
server.showUser();