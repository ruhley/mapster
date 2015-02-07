import DS from 'ember-data';
import Place from './place';

export default Place.extend({
    place_id: DS.attr('number')
});