"use strict";

// class definitions
/**
 *
 * @returns {{isVerbose: isVerbose, inDebugMode: inDebugMode}}
 * @constructor
 */
function Configuration() {

    var verbose = false;
    var debug = false;

    function isVerbose() {
        return verbose;
    }

    function inDebugMode() {
        return debug;
    }

    return {
        isVerbose: isVerbose,
        inDebugMode: inDebugMode,
    }
}
module.exports = Configuration;

