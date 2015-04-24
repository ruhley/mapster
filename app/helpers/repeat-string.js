import Ember from "ember";

export default Ember.HTMLBars.makeBoundHelper(function(item, times) {
    var string = [];

    for (var i = 1; i < times; i++) {
        string.push(item);
    }

    return new Ember.HTMLBars.SafeString(string.join(''));
});
