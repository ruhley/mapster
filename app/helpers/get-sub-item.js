import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(item, sub) {
    return item[sub];
});