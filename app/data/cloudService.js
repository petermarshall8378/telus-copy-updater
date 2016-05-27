var Spreadsheet = require('edit-google-spreadsheet');

// Todo: move to constants file
var spreadsheetId = "1a5wbkOdHirt315JnbOyKZMYOTptv7bvgN6Re7C_DmSE";
var worksheetId = "od6";
var serviceAccount = "copyupdater@copyupdater.iam.gserviceaccount.com";
var keyFile = "./key.pem";

/**
 * Authenticated master copy spreadsheet can remain private
 */
var spreadsheet = Spreadsheet.load({
    debug: true,
    spreadsheetId: spreadsheetId,
    worksheetId: worksheetId,
    oauth : {
        email: serviceAccount,
        keyFile: keyFile
    },
}, function () {

});

/**
 * Get a JSON array with keys and copy
 * @return {Array} jsonArray
 */

module.exports.getJSON = function(callback) {
    console.log("*** CLOUD SERVICE *** GET JSON ***");

    spreadsheet.receive(function(err, data) {
        if(err)
            callback(err);

        callback(null, data);
    });
};

/**
 * Save a JSON array to Cloud
 * @param {Array} jsonArray
 * @return {Array} jsonArray -- differences? conflicts? updated?
 */

module.exports.writeJSON = function(jsonArray, callback) {
    console.log("*** CLOUD SERVICE *** WRITE JSON ***");
    spreadsheet.send(function(err, data) {
        "use strict";
        if(err)
            callback(err);

        callback(null, data);
    });
}

