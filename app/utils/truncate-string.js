export default function truncateString(text, length) {
    if (text && text.length > length) {
    	text = text.substr(0, length) + '...';
    }

    return text;
}