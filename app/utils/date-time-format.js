/* global moment */
export default function dateTimeFormat(value, format) {
    var m = moment(value);

    if (typeof format !== 'string') {
        format = 'DD/MM/YYYY HH:mm:ss';
    }

    if (value) {
        return m.format(format);
    } else {
        return null;
    }

    return value;
}