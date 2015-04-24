import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    plural: DS.attr('string'),
    changes: DS.attr('boolean'),
    icon: DS.attr('string'),

    url: function() {
        return this.get('name').replace(/\s+/g, '-').toLowerCase();
    }.property('name'),
    iconDisplay: function() {
    	var icon = this.get('icon');

    	if (icon) {
    		return '<i class="' + icon + '"></i>';
    	}

    	return '';
    }.property('icon')
});