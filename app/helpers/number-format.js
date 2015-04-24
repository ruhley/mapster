import Ember from "ember";
import numberFormat from "../utils/number-format";

export default Ember.HTMLBars.makeBoundHelper(function(value, format) {
    return numberFormat(value, format);
});
