var commandManager = require("../managers/commandManager");

/**
 * Parse a user's command and process args
 *      Possible commands:
 *          update      (update only without conflicts - don't delete/add keys)
 *          overwrite   (force overwrite regardless)
 *          status      (prepare status report on differences)
 * @param {args} string
 * @return {String} status update
 */

module.exports.processCommand = function (command) {
    switch (command) {
        case "-g":
            writeToCloud(function () {
                console.log("in the controller's callback");
            });
            break;
        case "-f":
            writeToCopy();
            break;
        case "-c":
            compareSources();
            break;
        default:
            console.log("Error: Unknown request type.");
            console.log("Usage: ");
            console.log("Write to Google spreadsheet: -g");
            console.log("Write to copy file: -c");
            console.log("Compare both sources: -d");
            break;
    }
}

function writeToCloud (callback) {
    console.log("CONTROLLER - writeToCloud()");
    commandManager.writeToCloud(function (err, data) {
        console.log("inside");
        if(err)
            callback(err);

        callback(null, data);
    });
}

function writeToCopy (callback) {
    commandManager.writeToCopy(callback);
}

function compareSources (callback) {
    commandManager.compareSources(callback);
}

