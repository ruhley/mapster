import Ember from "ember";
import dateFormat from "../utils/date-format";

export default Ember.HTMLBars.makeBoundHelper(function(value, format) {
    return dateFormat(value, format);
});
