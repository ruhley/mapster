import ModelMixin from "../mixins/model";
import DS from 'ember-data';

export default DS.Model.extend(ModelMixin, {
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
