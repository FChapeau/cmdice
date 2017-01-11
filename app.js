#!/usr/bin/env node
/**
 * Created by chapeau on 10/01/17.
 */
var program = require("commander");

program.commands = require("./commands");

program.parse(process.argv);