import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(object) {
	console.log(object);
    return JSON.stringify(object);
});