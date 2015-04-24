import ModelMixin from "../mixins/model";
import DS from 'ember-data';

export default DS.Model.extend(ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    link: DS.attr('string'),
    sequence: DS.attr('number'),
    chapter_id: DS.attr('number'),
    created: DS.attr('date'),

    chapter: DS.belongsTo('chapter')
});
