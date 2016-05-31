"use strict";

// class definitions
/**
 *
 * @returns {{isVerbose: isVerbose, inDebugMode: inDebugMode}}
 * @constructor
 */
class Configuration {

    constructor() {
        this.verbose = false;
        this.debug = true;
    }

    isVerbose() {
        return this.verbose;
    }

    inDebugMode() {
        return this.debug;
    }

    /*return {
     isVerbose: isVerbose,
     inDebugMode: inDebugMode,
     }*/
}
module.exports = Configuration;

