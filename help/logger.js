module.exports = function (module) {
    this.info = function (message) {
        console.log(`${module.filename} Info: ${message}`);
    };
    return this;
};