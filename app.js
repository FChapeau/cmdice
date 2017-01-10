/**
 * Created by chapeau on 10/01/17.
 */
var program = require("commander");
var commandLoader = require("./commands");

program.commands = commandLoader(program);

program.parse(process.argv);