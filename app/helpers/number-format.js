import Ember from "ember";
import numberFormat from "../utils/number-format";

export default Ember.Handlebars.makeBoundHelper(function(value, format) {
    return numberFormat(value, format);
});