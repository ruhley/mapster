import numeral from "numeral";
import isNumber from "./is-number";

export default function numberFormat(value, format) {
    if (!isNumber(value)) {
        value = 0;
    }

    if (typeof format !== 'string') {
        format = '0,0';
    }

    return numeral(value).format(format);
}