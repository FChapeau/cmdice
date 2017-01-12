var Random = require("random-js");
var Symbols = require("./symbols.js");

module.exports = {
    Blue: blue,
    Black: black,
    Green: green,
    Purple: purple,
    Red: red,
    Yellow: yellow,
    White: white
};

/**
 * Rolls a blue dice from Fantasy Flight's Star Wars RPG
 * 
 * @returns Array of Symbols, from 0 to 2 members
 */
function blue(){
    var diceResult = Random.integer(0, 6)(Random.engines.nativeMath);
    var output = [];
    
    switch (diceResult) {
        case 0:
            output.push(Symbols.SUCCESS);
            break;
        case 1:
            output.push(Symbols.ADVANTAGE);
            break;
        case 2:
            output.push(Symbols.ADVANTAGE);
            output.push(Symbols.SUCCESS);
            break;
        case 3: 
            output.push(Symbols.ADVANTAGE);
            output.push(Symbols.ADVANTAGE);
            break;
    }

    return output;
}

function black(){
    var diceResult = Random.integer(0,6)(Random.engines.nativeMath);
    var output = [];

    switch(diceResult){
        case 0:
        case 1:
            output.push(Symbols.DISADVANTAGE);
            break;
        case 2:
        case 3:
            output.push(Symbols.FAILURE);
            break;
    }

    return output;
}

function green(){
    var diceResult = Random.integer(0,8)(Random.engines.nativeMath);
    var output = [];

    switch(diceResult){
        case 0:
        case 1:
            output.push(Symbols.SUCCESS);
            break;
        case 2:
        case 3:
            output.push(Symbols.ADVANTAGE);
            break;
        case 4:
            output.push(Symbols.SUCCESS);
            output.push(Symbols.SUCCESS);
            break;
        case 5:
            output.push(Symbols.SUCCESS);
            output.push(Symbols.ADVANTAGE);
            break;
        case 6:
            output.push(Symbols.ADVANTAGE);
            output.push(Symbols.ADVANTAGE);
            break;
    }

    return output;
}

function purple(){
    var diceResult = Random.integer(0,8)(Random.engines.nativeMath);
    var output = [];

    switch(diceResult){
        case 0:
            output.push(Symbols.FAILURE);
            break;
        case 1:
        case 2:
        case 3:
            output.push(Symbols.DISADVANTAGE);
            break;
        case 4:
            output.push(Symbols.FAILURE);
            output.push(Symbols.FAILURE);
            break;
        case 5:
            output.push(Symbols.FAILURE);
            output.push(Symbols.DISADVANTAGE);
            break;
        case 6:
            output.push(Symbols.DISADVANTAGE);
            output.push(Symbols.DISADVANTAGE);
            break;
    }

    return output;
}

function red(){
    var diceResult = Random.integer(0,12)(Random.engines.nativeMath);
    var output = [];

    switch(diceResult){
        case 0:
            output.push(Symbols.DESPAIR);
            break;
        case 1:
        case 2:
            output.push(Symbols.FAILURE);
            break;
        case 3:
        case 4:
            output.push(Symbols.DISADVANTAGE);
            break;
        case 5:
        case 6:
            output.push(Symbols.FAILURE);
            output.push(Symbols.DISADVANTAGE);
            break;
        case 7:
        case 8:
            output.push(Symbols.DISADVANTAGE);
            output.push(Symbols.DISADVANTAGE);
            break;
        case 9:
        case 10:
            output.push(Symbols.FAILURE);
            output.push(Symbols.FAILURE);
            break;
    }

    return output;
}

function yellow(){
    var diceResult = Random.integer(0,12)(Random.engines.nativeMath);
    var output = [];

    switch(diceResult){
        case 0:
            output.push(Symbols.DESPAIR);
            break;
        case 1:
        case 2:
            output.push(Symbols.SUCCESS);
            break;
        case 3:
            output.push(Symbols.ADVANTAGE);
            break;
        case 4:
        case 5:
        case 6:
            output.push(Symbols.SUCCESS);
            output.push(Symbols.ADVANTAGE);
            break;
        case 7:
        case 8:
            output.push(Symbols.ADVANTAGE);
            output.push(Symbols.ADVANTAGE);
            break;
        case 9:
        case 10:
            output.push(Symbols.SUCCESS);
            output.push(Symbols.SUCCESS);
            break;
    }

    return output;
}

function white(){
    var diceResult = Random.integer(0,12)(Random.engines.nativeMath);
    var output = [];

    switch(diceResult){
        case 0:
        case 1:
        case 2:
            output.push(Symbols.WHITE_FORCE);
            output.push(Symbols.WHITE_FORCE);
            break;
        case 3:
        case 4:
            output.push(Symbols.WHITE_FORCE);
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            output.push(Symbols.BLACK_FORCE);
            break;
        case 11:
            output.push(Symbols.BLACK_FORCE);
            output.push(Symbols.BLACK_FORCE);
            break;
    }

    return output;
}