// Methods is nothing but an action that can be perfomed on any object.

const calculator = {
        add: function(a,b){
            return a + b;
        },

        sub: function(a,b){
            return a - b;
        },

        mul: function(a,b){
            return a * b;
        }
}


console.log(calculator.add(100,30));
;