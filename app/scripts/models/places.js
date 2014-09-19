App.Place = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    coordinates: DS.attr('string'),
    map_id: DS.attr('number'),
    place_type_id: DS.attr('number'),
    created: DS.attr('date'),

    place_type: DS.belongsTo('place_type')
});

App.PlaceVersion = App.Chapter.extend({
    place_id: DS.attr('number')
});


App.PlaceSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        place_type: {
            embedded: 'always'
        }
    }
});
