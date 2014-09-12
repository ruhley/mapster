App.Media = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    abbreviation: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    sequence: DS.attr('number'),
    universe_id: DS.attr('number'),
    created: DS.attr('date')
});

App.MediaVersion = App.Media.extend({
    media_id: DS.attr('number')
});


Ember.Inflector.inflector.uncountable('media');
