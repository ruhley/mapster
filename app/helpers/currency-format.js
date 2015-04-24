import Ember from "ember";
import currencyFormat from "../utils/currency-format";

export default Ember.HTMLBars.makeBoundHelper(function(value) {
    return currencyFormat(value);
});
