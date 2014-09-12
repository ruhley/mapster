App.Character = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    universe_id: DS.attr('number'),
    created: DS.attr('date')
});

App.CharacterVersion = App.Chapter.extend({
    character_id: DS.attr('number')
});
