import DS from 'ember-data';
import ModelMixin from "../mixins/model";

export default DS.Model.extend(ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    sequence: DS.attr('number'),
    media_id: DS.attr('number'),
    created: DS.attr('date')
});