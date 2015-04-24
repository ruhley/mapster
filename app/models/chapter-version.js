import DS from 'ember-data';
import Chapter from './chapter';

export default Chapter.extend({
    chapter_id: DS.attr('number')
});