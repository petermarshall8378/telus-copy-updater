var cloudService = require("../data/cloudService");

/**
 * Read Cloud
 * @return {Array} jsonArray - status result
 *
 * Possible return values:
 *      - success, copy pushed to Cloud
 *      -
 */
module.exports.readFromCloud = function (callback) {
    console.log("*** CLOUD MANAGER *** READ FROM CLOUD ***");
    cloudService.getJSON(function (err, data) {
        if (err)
            callback(err);
        //console.log("manager level...");
        callback(null, data);
    });
};

/**
 * Read JSON from Copy and write to Cloud
 * @return {Array} jsonArray - status result
 */
module.exports.writeToCloud = function (jsonArray, callback) {
    console.log("*** CLOUD MANAGER *** WRITE TO COPY ***");
    cloudService.writeJSON(jsonArray, function (err, data) {
       if (err)
           callback(err);

        callback(null, data);
    });
};