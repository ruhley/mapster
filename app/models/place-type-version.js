import DS from 'ember-data';
import PlaceType from './place-type';

export default PlaceType.extend({
    place_type_id: DS.attr('number')
});