var copyService = require("../data/copyService");

/**
 * Read Copy from Cloud and write to File
 * @return {Array} jsonArray - status result
 */
module.exports.readFromCopy = function (callback) {
    console.log("*** COPY MANAGER *** READ FROM COPY ***");
    copyService.getJSON(function (err, data) {
        if (err)
            callback(err);

        
        callback(null, data);
    });
};

/**
 * Read JSON from Cloud and write to Copy
 * @return {Array} jsonArray - status result
 */
module.exports.writeToCopy = function (callback) {
    console.log("*** COPY MANAGER *** WRITE TO COPY ***");
};

