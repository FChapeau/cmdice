/**
 * Created by chapeau on 10/01/17.
 */
var ffsw = require("../engine/ffsw");
var command = require('commander');

command.command("ffsw")
    .option("-p --purple <purple>", "Number of purple dice")
    .option("-r --red <red>", "Number of red dice")
    .option("-b --black <black>", "Number of black dice")
    .option("-g --green <green>", "Number of green dice")
    .option("-y --yellow <yellow>", "Number of yellow dice")
    .option("-B --blue <blue>", "Number of blue dice")
    .action(function(command){
        
        var rollResult = ffsw.Roll(ffsw.DicePool(command.black, command.blue, command.purple, command.green, command.red, command.yellow, command.white));
        
        console.log(rollResult);
    });

exports.Command = command;