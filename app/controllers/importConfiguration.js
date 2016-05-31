"use strict";
var Configuration = require("../controllers/configuration");
var commandManager = require("../managers/commandManager");

/**
 *
 * @returns {{}}
 * @constructor
 */
class ImportConfiguration extends Configuration {

    constructor(configuration) {
        this.import_json = configuration.json;
        this.force_mode = configuration.force;
    };

    execute() {
        console.log("Import - execute");
        commandManager.writeToCloud(configuration.import_json, (function (err, data) {
            console.log("inside");
            if(err)
                callback(err);

            callback(null, data);
        }));
    }
}

module.exports = ImportConfiguration;