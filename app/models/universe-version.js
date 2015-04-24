import DS from 'ember-data';
import Universe from './universe';

export default Universe.extend({
    universe_id: DS.attr('number')
});