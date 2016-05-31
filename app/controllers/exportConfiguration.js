"use strict";
const Configuration = require("../controllers/configuration");
var commandManager = require("../managers/commandManager");

/**
 *
 * @returns {{}}
 * @constructor
 */
class ExportConfiguration extends Configuration {
    constructor(configuration) {
        this.output_json_copy = configuration.json;
        this.force_mode = configuration.force;
    };

    execute(configuration) {
        console.log("Export - execute");
        commandManager.writeToCopy(configuration.output_json_copy, (function (err, data) {
            console.log("inside");
            if(err)
                callback(err);

            callback(null, data);
        }));
    }
};

module.exports = ExportConfiguration;

