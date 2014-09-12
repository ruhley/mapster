App.Place = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    coordinates: DS.attr('string'),
    map_id: DS.attr('number'),
    place_type_id: DS.attr('number'),
    created: DS.attr('date')
});

App.PlaceVersion = App.Chapter.extend({
    place_id: DS.attr('number')
});
