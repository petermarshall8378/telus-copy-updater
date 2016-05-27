"use strict";
const configuration = require("../controllers/configuration");
var commandManager = require("../managers/commandManager");

/**
 *
 * @returns {{}}
 * @constructor
 */
function ImportConfiguration() {
    var importConfiguration = {};
    importConfiguration.__proto__ = configuration();

    var import_json = '';
    var force_mode = false;

    function execute(configuration) {
        console.log("Import - execute");
        commandManager.writeToCloud(configuration.import_json, (function (err, data) {
            console.log("inside");
            if(err)
                callback(err);

            callback(null, data);
        }));
    }
    
    function setJson(json) {
        console.info('importing file: %s', json);
        import_json = json;
    }

    function setForce(force) {
        force_mode = force;
    }

    return importConfiguration;
}

module.exports = ImportConfiguration;