import DS from 'ember-data';
import UniverseVersion from './universe-version';

export default UniverseVersion.extend({
    event_id: DS.attr('number')
});