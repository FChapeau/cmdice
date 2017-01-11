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

module.exports = roll;