const users = require('./users');

function DataBase() {
    this.getAdmins = function () {
        return Array.from(users.Admins, v => new User(v.name));
    };
    this.getUsers = function () {
        return Array.from(users.Users, v => new User(v.name));
    }
}

function User(userName) {
    this.userName = userName;
    this.getName = function () {
        return this.userName;
    };
}

module.exports = DataBase;