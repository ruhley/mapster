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

Ember.Handlebars.helper('repeat', function(item, times) {
    var string = [];

    for (var i = 1; i < times; i++) {
        string.push(item);
    }

    return new Ember.Handlebars.htmlSafe(string.join(''));
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

    var tempLvalue = Ember.Handlebars.get(this, lvalue, options);
    var tempOperator = Ember.Handlebars.get(this, operator, options);
    var tempRvalue = Ember.Handlebars.get(this, rvalue, options);

    if (tempLvalue !== undefined && tempLvalue !== null) {
        lvalue = tempLvalue;
    }

    if (tempOperator !== undefined && tempOperator !== null) {
        operator = tempOperator;
    }

    if (tempRvalue !== undefined && tempRvalue !== null) {
        rvalue = tempRvalue;
    }

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


Ember.Handlebars.registerHelper('coords', function(place, options) {
    place = Ember.Handlebars.get(this, place, options) || place;

    var coords = place.get('coordinates').split(',');

    if (coords.length === 1) {
        coords = coords.join('').split(' ');
        return new Ember.String.htmlSafe('<circle id="map-place-' + place.get('id') + '" cx="' + coords[0] + '" cy="' + coords[1] + '" r="5" class="' + place.get('place_type.name') + ' place" data-id="' + place.get('id') + '"></circle > ');
    }

    return new Ember.String.htmlSafe('<path  id="map-place-' + place.get('id') + '" d="M ' + coords.join(' L ') + ' Z" class="' + place.get('place_type.name') + ' place" data-id="' + place.get('id') + '"></path>');
});
