var commandManager = require("../managers/commandManager");

/**
 *
 * @param callback
 */
exports.writeToCloud = (callback)  => {
    console.log("*** COMMAND CONTROLLER - writeToCloud() ***");

    commandManager.writeToCloud(function (err, data) {
        if(err)
            callback(err);

        callback(null, data);
    });
}

/**
 *
 * @param callback
 */
exports.writeToCopy = (callback) => {
    console.log("*** COMMAND CONTROLLER - writeToCopy() ***");

    commandManager.writeToCopy(function (err, data) {
        if(err)
            callback(err);

        callback(null, data);
    });
}

/**
 *
 * @param callback
 */
function compareSources (callback) {
    commandManager.compareSources(callback);
}

