import Ember from "ember";

export default Ember.HTMLBars.makeBoundHelper(function(item, sub) {
    return item[sub];
});
