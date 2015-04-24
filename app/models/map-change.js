import DS from 'ember-data';
import MapVersion from './map-version';

export default MapVersion.extend({
    event_id: DS.attr('number')
});