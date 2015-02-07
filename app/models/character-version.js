import DS from 'ember-data';
import Character from './character';

export default Character.extend({
    character_id: DS.attr('number')
});