Ember.Handlebars.helper('debug', function(optionalValue) {
    console.log('====================');
    console.log('Current Context', this);
    console.log('Value', optionalValue);
    console.log('====================');
});

Ember.Handlebars.helper('get-sub-item', function(item, sub) {
    return item[sub];
});

Ember.Handlebars.helper('number-format', function(value, format) {
    return numberFormat(value, format);
});

Ember.Handlebars.helper('currency-format', function(value) {
    return currencyFormat(value);
});

Ember.Handlebars.helper('percent-format', function(value) {
    return percentFormat(value);
});

Ember.Handlebars.helper('date-format', function(value, format) {
    return dateFormat(value, format);
});

Ember.Handlebars.registerHelper('coords', function(coords, options) {
    coords = Ember.Handlebars.get(this, coords, options) || coords;
    coords = coords.split(',');

    if (coords.length === 1) {
        coords = coords.join('').split(' ');
        return '<circle cx="' + coords[0] + '" cy="' + coords[1] + '" r="5" class="other-places"></circle > ';
    }

    return ' <path d="M ' + coords.join(' L ') + '" class="other-places"> </path>';
});

Ember.Handlebars.helper('repeat', function(item, times) {
    var string = [];

    for (var i = 1; i < times; i++) {
        string.push(item);
    }

    return new Ember.Handlebars.SafeString(string.join(''));
});

Ember.Handlebars.registerHelper('compare', function(lvalue, operator, rvalue, options) {
    var operators, result;
    if (arguments.length < 3) {
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
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
            return l == r;
        },
        '===': function(l, r) {
            return l === r;
        },
        '!=': function(l, r) {
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
