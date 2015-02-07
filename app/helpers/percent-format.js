import Ember from "ember";
import percentFormat from "../utils/percent-format";

export default Ember.Handlebars.makeBoundHelper(function(value, format) {
    return percentFormat(value, format);
});