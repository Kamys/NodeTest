function run() {
    var database = require('./database');
    console.log("Server start");
    var admin = new database.Admin();
    console.log("Admin - " + admin.getName());
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
