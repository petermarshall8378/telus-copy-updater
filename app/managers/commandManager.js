var copyManager = require("../managers/copyManager");
var cloudManager = require("../managers/cloudManager");
var jsonValidator = require("../helpers/JSONValidator");

/**
 *
 * @param callback
 */
module.exports.writeToCloud = function (callback) {
    // 1) read from copy
    // 2) validate
    // 3) write to Copy

    console.log("COMMAND MANAGER - writeToCloud()");
    copyManager.readFromCopy(function (err, data) {
        if (err)
            callback(err);

        //console.log(data);
        validate_copy(data, cloudManager.writeToCloud(data));
        //callback(null, data);
    });
};

/**
 *
 * @param callback
 */
module.exports.writeToCopy = function (callback) {
    console.log("COMMAND MANAGER - writeToCloud()");

    /*
    // 1) read Google Spreadsheet
    cloudManager.readFromCloud();
    // 2) validate
    jsonValidator.validate();
    // 3) write to Copy
    copyManager.writeToCopy();*/
};

/**
 *
 * @param data
 * @param callback
 * @returns {Promise}
 */
function validate_copy(data){
    return new Promise(function (fulfill, reject){
        jsonValidator.validate(data, function (err){
            if (err) reject(err);
            else fulfill(callback);
        });
    });
}

/**
 *
 * @param callback
 */
module.exports.compareSources = function (callback) {
    /*
    // 1) read from copy
    copyManager.readFromCopy();
    // 2) read from Cloud
    cloudManager.readFromCloud();
    // 3) run comparison
    */
};

