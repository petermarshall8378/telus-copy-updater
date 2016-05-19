var jsonfile = require('jsonfile');

// Todo: move to constants file?
var file = "input/global_lang.json";

/**
 * Get a JSON array with keys and copy
 * @return {Array} jsonArray
 */
module.exports.getJSON = function (callback) {
    jsonfile.readFile(file, function (err, data) {
        if (err)
            callback(err);

        callback(null, JSON.stringify(data));
    });
};

/**
 * Save a JSON array to Copy
 * @param {Array} jsonArray
 * @return {Array} jsonArray -- differences? conflicts? updated?
 */
module.exports.writeJSON = function(jsonArray, callback) {
    jsonfile.writeFile("output/write_copy.json", function(err, data) {
        if (err)
            callback(err);

        callback(null, data);
    });
};

