import Ember from "ember";

export default Ember.HTMLBars.makeBoundHelper(function(object) {
	console.log(object);
    return JSON.stringify(object);
});
