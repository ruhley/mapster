App.Chapter = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    sequence: DS.attr('number'),
    media_id: DS.attr('number'),
    created: DS.attr('date')
});

App.ChapterVersion = App.Chapter.extend({
    chapter_id: DS.attr('number')
});
