"use strict";
const configuration = require("../controllers/configuration");
var commandManager = require("../managers/commandManager");

/**
 *
 * @returns {{}}
 * @constructor
 */
function ExportConfiguration() {
    var exportConfiguration = {};
    exportConfiguration.__proto__ = configuration();

    var output_json_copy = '';
    var force_mode = false;

    function execute(configuration) {
        console.log("Export - execute");
        commandManager.writeToCopy(configuration.output_json_copy, (function (err, data) {
            console.log("inside");
            if(err)
                callback(err);

            callback(null, data);
        }));
    }

    function setJsonFile(json) {
        console.info('exporting to file: %s', json);
        output_json_copy = json;
    }

    function setForce(force) {
        force_mode = force;
    }

    return exportConfiguration;
}

module.exports = ExportConfiguration;

