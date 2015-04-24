import Ember from "ember";
import dateTimeFormat from "../utils/date-time-format";

export default Ember.HTMLBars.makeBoundHelper(function(value, format) {
    return dateTimeFormat(value, format);
});
