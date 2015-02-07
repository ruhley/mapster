import Ember from "ember";
import currencyFormat from "../utils/currency-format";

export default Ember.Handlebars.makeBoundHelper(function(value) {
    return currencyFormat(value);
});