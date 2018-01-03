const DataBase = require('./data/database');
function Server() {
    const dataBase = new DataBase();

    this.run = function () {
        console.log("Server start");
    };
    this.showAdmins = function () {
        showListProfile(dataBase.getAdmins(), "Admins");
    };
    this.showUser = function () {
        showListProfile(dataBase.getUsers(), "User");
    };
    function showListProfile(listProfile,nameList = "List") {
        console.log(`======= ${nameList} =======`);
        listProfile.forEach((profile, index) => console.log(`${index}. ${profile.getName()}`));
    }
}

if (module.parent) {
    module.exports = Server;
} else {
    let server = new Server();
    server.run();
}
