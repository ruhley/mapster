import DS from 'ember-data';
import Media from './media';

export default Media.extend({
    media_id: DS.attr('number')
});