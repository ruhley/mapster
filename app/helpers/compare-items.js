import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(lvalue, operator, rvalue, options) {
    var operators, result;

    if (arguments.length < 3) {
        throw new Error("Handlebars Helper 'compare' needs 2 parameters");
    }

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }

    lvalue = Ember.Handlebars.get(this, lvalue, options) || lvalue;
    operator = Ember.Handlebars.get(this, operator, options) || operator;
    rvalue = Ember.Handlebars.get(this, rvalue, options) || rvalue;


    operators = {
        '==': function(l, r) {
        	//jshint eqeqeq:false
            return l == r;
        },
        '===': function(l, r) {
            return l === r;
        },
        '!=': function(l, r) {
        	//jshint eqeqeq:false
            return l != r;
        },
        '!==': function(l, r) {
            return l !== r;
        },
        '<': function(l, r) {
            return l < r;
        },
        '>': function(l, r) {
            return l > r;
        },
        '<=': function(l, r) {
            return l <= r;
        },
        '>=': function(l, r) {
            return l >= r;
        },
        'typeof': function(l, r) {
        	//jshint eqeqeq:false
            return typeof l == r;
        }
    };

    if (!operators[operator]) {
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
    }

    result = operators[operator](lvalue, rvalue);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});