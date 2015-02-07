import Ember from "ember";
import dateTimeFormat from "../utils/date-time-format";

export default Ember.Handlebars.makeBoundHelper(function(value, format) {
    return dateTimeFormat(value, format);
});