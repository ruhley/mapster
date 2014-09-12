App.MapsterEntity = DS.Model.extend({
    name: DS.attr('string'),
    plural: DS.attr('string'),

    url: function() {
        return this.get('name').replace(/\s+/g, '-').toLowerCase();
    }.property('name')
});
