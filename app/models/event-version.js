import DS from 'ember-data';
import Event from './event';

export default Event.extend({
    event_id: DS.attr('number')
});