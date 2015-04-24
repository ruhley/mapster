import numeral from "numeral";
import isNumber from "./is-number";

export default function currencyFormat(value) {
    if (!isNumber(value)) {
        value = 0;
    }

    return numeral(value).format('$0,0');
}