import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(item, times) {
    var string = [];

    for (var i = 1; i < times; i++) {
        string.push(item);
    }

    return new Ember.Handlebars.SafeString(string.join(''));
});