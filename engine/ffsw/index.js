var dicelist = require("./dice.js");

/**
 * This throws a set of dice for Fantasy Flight's Star Wars RPG.
 * 
 * Takes in parameter an object that needs to have seven properties
 * @param {object} params - Parameters of the dice pool
 * @see {@link dicePool}
 */
function roll (params){
    var rollResult = {
        Advantage: 0,
        Disadvantage: 0,
        Success: 0,
        Triumph: 0,
        Despair: 0,
        WhiteForce: 0,
        BlackForce: 0,
        Failure: 0
    };

    for (var key in params){
        if (params.hasOwnProperty(key)){
            for (var i = 0; i < params[key]; i++){
                dicelist[key]().forEach(function(item){rollResult[item]++;});
            }
        }
    }

    return processRoll(rollResult);
}

/**
 * This constructs a dice pool object digestable by the roll function.
 * @constructor
 * @param {integer} black - Number of black dice to roll
 * @param {integer} blue - Number of blue dice to roll
 * @param {integer} purple - Number of purple dice to roll
 * @param {integer} green - Number of green dice to roll
 * @param {integer} red - Number of red dice to roll
 * @param {integer} yellow - Number of yellow dice to roll
 * @param {integer} white - Number of white dice to roll
 */
function dicePool(black, blue, purple, green, red, yellow, white) {
    return {
        Black: black,
        Blue: blue,
        Purple: purple,
        Green: green,
        Red: red,
        Yellow: yellow,
        White: white
    };
}

/**
 * This processes the dice pool result by eliminating opposing symbols.
 * @param roll Raw dice roll
 * @returns {{Advantage: number, Disadvantage: number, Success: number, Triumph: number, Despair: number, WhiteForce: number, BlackForce: number, Failure: number}} Sorted dice pool
 */
function processRoll (roll){
    var output = {
        Advantage: 0,
        Disadvantage: 0,
        Success: 0,
        Triumph: 0,
        Despair: 0,
        WhiteForce: 0,
        BlackForce: 0,
        Failure: 0
    };
    
    output.Advantage = roll.Advantage - roll.Disadvantage;
    output.Disadvantage = -output.Advantage;
    
    output.Triumph = roll.Triumph;
    output.Despair = roll.Despair;
    
    output.Success = (roll.Success + Math.floor(0, output.Triumph)) - (roll.Failure + Math.floor(0, output.Despair));
    output.Failure = -output.Failure;
    
    output.WhiteForce = roll.WhiteForce - roll.BlackForce;
    output.BlackForce = -output.WhiteForce;
    
    for (var property in output){
        if (output.hasOwnProperty(property)){
            if (output[property] <=0){
                delete output[property];
            }
        }
    }
    
    return output;
}

module.exports = {
    Roll: roll,
    DicePool: dicePool
};