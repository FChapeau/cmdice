/* eslint-env node */
var dicelist = {
    Purple : null,
    Green : null,
    Black: null,
    Blue: null,
    Yellow: null,
    Red: null,
    White: null
}

/**
 * This throws a set of dice for Fantasy Flight's Star Wars RPG.
 * 
 * Takes in parameter an object that needs to have seven properties
 * @param {object} params - Parameters of the dice pool
 * @see {@link dicePool}
 */
function roll (params){
    var dicelist = {
        Purple : function(){console.log("purple")},
        Green : function(){console.log("green")}
    }
    
    for (var key in params){
        if (params.hasOwnProperty(key)){
            for (var i = 0; i < params[key]; i++){
                dicelist[key]();
            }
            
        }
    }
}

/**
 * This constructs a dice pool object digestable by the roll function.
 * @constructor
 * @param {integer} black - Number of black dice to roll
 */
function dicePool(black, blue, purple, green, red, yellow, white)
{
    return {
        Black: black,
        Blue: blue,
        Purple: purple,
        Green: green,
        Red: red,
        Yellow: yellow,
        White: white
    }
}

module.exports = {
    Roll: roll,
    DicePool: dicePool
};