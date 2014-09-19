App.Universe = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    abbreviation: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    created: DS.attr('date'),

    urlId: function() {
        return null;
    }.property('id')
});

App.UniverseVersion = App.Universe.extend({
    universe_id: DS.attr('number')
});
