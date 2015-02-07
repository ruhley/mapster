import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(coords, id, placeId) {
	var classes = 'other-places';

	if (id === placeId) {
		classes = 'current-place';
	}

	coords = coords.split(',');

	if (coords.length === 1) {
		coords = coords.join('').split(' ');
		return '<circle cx="' + coords[0] + '" cy="' + coords[1] + '" r="5" class="' + classes + '"></circle > ';
	}

	return ' <path d="M ' + coords.join(' L ') + '" class="' + classes + '"></path>';
});