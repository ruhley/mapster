import DS from 'ember-data';
import PlaceVersion from './place-version';

export default PlaceVersion.extend({
    event_id: DS.attr('number')
});