App.Event = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string'),
    sequence: DS.attr('number'),
    chapter_id: DS.attr('number'),
    created: DS.attr('date')
});

App.EventVersion = App.Chapter.extend({
    event_id: DS.attr('number')
});
