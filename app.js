"use strict";

// imports
const configuration = require('./app/controllers/configuration');
const importController = require('./app/controllers/import');
const exportController = require('./app/controllers/export');

/**
 *  WORKFLOW
 *
 *  1) Designers populate designs with php-copy-keys. (DESIGNER)
 *  2) Copy is loaded into Sketch from JSON file they populate initially with the php-copy-keys. (DESIGNER)
 *  3) Copy is pushed to Google spreadsheet (DEVELOPER)
 *      a) read JSON file
 *      b) connect to Google spreadsheet
 *      c) read worksheet name
 *      b) populate appropriate columns
 *          i) php-copy-keys
 *          ii) English copy
 *          iii) French copy
 *  4) Copywriter updates/validates copy on Google spreadsheet (COPYWRITER) - copy is updated!
 *  5) Node.js script pulls updates into php-local-environment (DEVELOPER)
 *      a) connect to Google spreadsheet
 *      b) read required columns into JSON array
 *      c) write to JSON files - codebase is updated!
 *  6) Updated JSON file updates the Sketch designs (DESIGNER)
 *      a) through Sketch - designs are updated!
 *
 */

// create a command line parser
const program = require('commander');

program
    .version('0.0.1')
    .usage('[options] <file ...>')
    .option('-v, --verbose', 'display verbose messages')
    .option('-d, --debug', 'simulates command without actually executing it');

// configure import command
program
    .command('import <json_source>')
    .version('0.0.1')
    .description('imports a localization JSON file into Google Drive')
    .option("-f, --force", "forces import, even if validation fails")
    .action(function(json_source, options) {
        //const configuration = new Configuration();

        configuration.json = json_source;
        configuration.force = options.force;
        configuration.verbose = program.verbose;
        configuration.debug = program.debug;

        console.info('importing file: %s', json_source);
        importController.execute(configuration);        

    })
    //.parse(process.argv);

// configure export command
program
    .command('export <destination_json>')
    .description('exports Google Drive localization to a local JSON file')
    .action(function(destination_json, options) {

        configuration.output_json_copy = destination_json;
        configuration.force = options.force;
        configuration.verbose = program.verbose;
        configuration.debug = program.debug;
        
        console.info('exporting file to: %s', destination_json);
        exportController.execute(configuration);
    });

program.parse(process.argv);

var request = program.args;

if (!request.length) {
    console.error('A request is required.');
    process.exit(1);
}
