import DS from 'ember-data';
import CharacterVersion from './character-version';

export default CharacterVersion.extend({
    event_id: DS.attr('number')
});