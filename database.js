function Admin() {
    this.userName = "Nikita";
}

Admin.prototype.getName = function () {
    return this.userName;
};

exports.Admin = Admin;