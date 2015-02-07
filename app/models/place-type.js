import ModelMixin from "../mixins/model";
import DS from 'ember-data';

export default DS.Model.extend(ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    created: DS.attr('date')
});