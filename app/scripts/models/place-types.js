App.PlaceType = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    created: DS.attr('date'),

    place: DS.hasMany('place')
});

App.PlaceTypeVersion = App.Chapter.extend({
    place_type_id: DS.attr('number')
});
