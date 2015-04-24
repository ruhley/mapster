import Ember from "ember";
import truncateString from "../utils/truncate-string";

export default Ember.HTMLBars.makeBoundHelper(function(text, length) {
	return truncateString(text, length);
});
