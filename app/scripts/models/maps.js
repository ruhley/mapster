App.Map = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    universe_id: DS.attr('number'),
    created: DS.attr('date')
});

App.MapVersion = App.Chapter.extend({
    map_id: DS.attr('number')
});
