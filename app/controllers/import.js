"use strict";
const configuration = require("../controllers/configuration");

/**
 *
 * @returns {{}}
 * @constructor
 */
function ImportConfiguration() {
    var importConfiguration = {};
    importConfiguration.__proto__ = Configuration();

    var import_json = '';
    var force_mode = false;

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