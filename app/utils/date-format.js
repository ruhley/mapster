/* global moment */
export default function dateFormat(value, format) {
    var m = moment(value);

    if (typeof format !== 'string') {
        format = 'DD/MM/YYYY';
    }

    if (value) {
        return m.format(format);
    } else {
        return null;
    }

    return value;
}