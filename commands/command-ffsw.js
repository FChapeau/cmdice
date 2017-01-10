/**
 * Created by chapeau on 10/01/17.
 */
var command = require('commander');

command.command("ffsw")
    .option("-p --purple <purple>", "Number of purple dice")
    .option("-r --red <red>", "Number of red dice")
    .option("-b --black <black>", "Number of black dice")
    .option("-g --green <green>", "Number of green dice")
    .option("-y --yellow <yellow>", "Number of yellow dice")
    .option("-B --blue <blue>", "Number of blue dice")
    .action(function(command){
        console.log("hello ffsw");
    });

exports.Command = command;